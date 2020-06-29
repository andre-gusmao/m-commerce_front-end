import { Component, OnInit, Input } from '@angular/core';
import { RequestsService } from 'src/app/services/requests/requests.service';
import { ToolsService } from 'src/app/services/tools/tools.service';
import { AlertController } from '@ionic/angular';
import { AuthenticationsService } from 'src/app/services/authentications/authentications.service';
import { ModalController, NavController } from '@ionic/angular';
import { ItemDetailsPage } from '../item-details/item-details.page';
import { ShoppingCartService } from 'src/app/services/shopping-cart/shopping-cart.service'

@Component({
  selector: 'app-customers-catalogs',
  templateUrl: './customers-catalogs.page.html',
  styleUrls: ['./customers-catalogs.page.scss'],
})
export class CustomersCatalogsPage implements OnInit {
  
  @Input() id_item: string;
  @Input() product_name: string;
  @Input() item_price: number;
  @Input() catalog_note: string;
  @Input() customer_note: string;
  @Input() quantity: number;
  @Input() total_price: number;

  appCatalog: any = [];
  appGroups: any = [];
  id_company: string = "";
  id_customer: string = "";
  id_catalog: string = "";
  id_product: string = "";
  url: string = 'customers/catalogs.php';

  constructor(
    public requestService: RequestsService,
    public toolsService: ToolsService,
    public alertCtrl: AlertController,
    public authService: AuthenticationsService,
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public ShopCartSrc: ShoppingCartService
  ) { }

  ngOnInit() { }

  ionViewWillEnter() {
    if (this.authService.getLoginSuccessful()) {
      this.id_company = this.authService.getCompanyID();
      this.id_customer = this.authService.getProfileID();
      if(this.authService.getTableID()){
        this.authService.loadCatalog();
        this.loadCustomerCatalog();
        this.id_catalog = this.authService.getCatalogID();
      } else {
        this.toolsService.showToast("Faça checkin para carregar o cardapio");
        this.toolsService.goToPage('checkins');
      }
    } else {
      this.appCatalog = [];
      this.authService.setLogout();
    }
  }

  private async loadCustomerCatalog() {

    return new Promise(res => {

      this.requestService.getRequestById(this.url, 'company', this.id_company).subscribe(dataResponse => {

        for (let product of dataResponse['result']) {
          this.appCatalog.push(product);
        }
        this.authService.setCatalogID(dataResponse['result'][0].id_catalog);
        this.id_catalog = dataResponse['result'][0].id_catalog;
        this.loadGroups();
      }, error => {
        this.toolsService.showAlert();
      })

    });

  }

  async showItem(product: any) {

    const itemDetail = await this.modalCtrl.create({
      component: ItemDetailsPage,
      componentProps: {
        id_item: product.id_catalog_item,
        product_name: product.product_name,
        item_price: product.catalog_item_price,
        catalog_note: product.product_description,
        customer_note: "",
        quantity: 1,
        total_price: 1 * product.catalog_item_price
      }
    });

    await itemDetail.present();

    const { data } = await itemDetail.onWillDismiss();
    //console.log("data: " + data.id_item);
    this.id_item = data.id_item;
    this.quantity = data.quantity;
    this.customer_note = data.customer_note;

    let orderItem = {
      //id_order: auto
      id_company: this.id_company,
      id_customer: this.id_customer,
      order_total_price: data.total_price,
      order_status: "Nao enviado",
      order_payment_status: "Pendente",
      order_payment_method: "Cartao de Credito",
      id_payment_method: "1",
      items: {
        //id_order_item: auto,
        //id_order: auto,
        id_catalog: this.id_catalog,
        id_product: product.id_product,
        item_product_name: product.product_name,
        item_quantity: data.quantity,
        item_unit_price: product.catalog_item_price,
        item_total_price: data.total_price,
        item_note: data.customer_note
      }
    }

    this.ShopCartSrc.insertOrder(orderItem);

  }

  private loadGroups(): void {

    let item = [];
    let filGroup = [];
    let group = [];
    let name = ""
    this.appGroups = [];

    for(let i = 0; i < this.appCatalog.length; i++){
      name = this.appCatalog[i].product_category_name;
      if(group.indexOf(name) === -1 ){

        group.push(name);
        item = [];
        item['name'] = name;
        item['items'] = this.appCatalog.filter( (item) => { return item.product_category_name === name; } );
        filGroup.push(item);
      }
    }

    this.appGroups = filGroup;

  }

}
// this.modalCtrl.dismiss({
//   'dismissed': true,
//   'id_item': this.id_item,
//   'quantity': this.quantity,
//   'total_price': this.total_price,
//   'customer_note': this.customer_note
// });