import { Component, OnInit, Input } from '@angular/core';
import { RequestsService } from 'src/app/services/requests/requests.service';
import { ToolsService } from 'src/app/services/tools/tools.service';
import { AuthenticationsService } from 'src/app/services/authentications/authentications.service';
import { ModalController } from '@ionic/angular';
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
  @Input() item_price: number = 0;
  @Input() catalog_note: string;
  @Input() customer_note: string;
  @Input() quantity: number = 0;
  @Input() total_price: number = 0;

  url: string = 'customers/catalogs.php';

  constructor(
    public requestService: RequestsService,
    public toolsService: ToolsService,
    public authService: AuthenticationsService,
    public modalCtrl: ModalController,
    public ShopCartSrc: ShoppingCartService
  ) { }

  ngOnInit() {
    if (this.authService.getLoginSuccessful()) {
      this.loadCatalog();
    } else {
      this.ShopCartSrc.appCategory = [];
      this.authService.setLogout();
    }
  }

  ionViewWillEnter() {
    if (!this.authService.getLoginSuccessful()) {
      this.ShopCartSrc.appCategory = [];
      this.authService.setLogout();
    } else {
      if(!this.ShopCartSrc.catalogLoaded()){
        this.loadCatalog();
      }
    }
  }

  private loadCatalog(){
    
    if(this.authService.getTableID()){
      if(!this.ShopCartSrc.catalogLoaded()){
        this.loadCustomerCatalog();
      }
    } else {
      this.toolsService.showToast("Faça checkin para carregar o cardapio");
      this.toolsService.goToPage('checkins');
    }

  }

  private async loadCustomerCatalog() {

    return new Promise(res => {

      this.requestService.getRequestById(this.url, 'company', this.authService.getCompanyID()).subscribe(dataResponse => {

        for (let product of dataResponse['result']) {
          this.ShopCartSrc.appCatalog.push(product);
        }
        this.authService.setCatalogID(dataResponse['result'][0].id_catalog);
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
    this.id_item = data.id_item;
    this.quantity = data.quantity;
    this.customer_note = data.customer_note;

    let orderItem = {
      //id_order: auto
      id_company: this.authService.getCompanyID(),
      id_customer: this.authService.getProfileID(),
      order_total_price: data.total_price,
      order_status: "Nao enviado",
      order_payment_status: "Pendente",
      order_payment_method: "Cartao de Credito",
      id_payment_method: "1",
      items: {
        //id_order_item: auto,
        //id_order: auto,
        id_catalog: this.authService.getCatalogID(),
        id_product: product.id_product,
        item_product_name: product.product_name,
        item_quantity: data.quantity,
        item_unit_price: product.catalog_item_price,
        item_total_price: data.total_price,
        item_note: data.customer_note
      }
    }

    if(data.quantity > 0){
      this.ShopCartSrc.insertOrder(orderItem);
      this.toolsService.showToast(orderItem.items.item_product_name + " adicionado ao pedido");
    }

  }

  private loadGroups(): void {

    let item = [];
    let filGroup = [];
    let group = [];
    let name = ""
    this.ShopCartSrc.appCategory = [];

    for(let i = 0; i < this.ShopCartSrc.appCatalog.length; i++){
      name = this.ShopCartSrc.appCatalog[i].product_category_name;
      if(group.indexOf(name) === -1 ){

        group.push(name);
        item = [];
        item['name'] = name;
        item['items'] = this.ShopCartSrc.appCatalog.filter( (item) => { return item.product_category_name === name; } );
        filGroup.push(item);
      }
    }

    this.ShopCartSrc.appCategory = filGroup;

  }

}