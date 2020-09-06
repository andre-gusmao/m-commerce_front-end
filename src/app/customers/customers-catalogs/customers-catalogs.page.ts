import { ShoppingBagService } from 'src/app/services/shopping-bag/shopping-bag.service';
import { Component, OnInit, Input } from '@angular/core';
import { RequestsService } from 'src/app/services/requests/requests.service';
import { ToolsService } from 'src/app/services/tools/tools.service';
import { AuthenticationsService } from 'src/app/services/authentications/authentications.service';
import { ModalController } from '@ionic/angular';
import { ItemDetailsPage } from '../item-details/item-details.page';
import { ShoppingCartService } from 'src/app/services/shopping-cart/shopping-cart.service';
import { IOrderItem } from './../../inferfaces/orderItem';
import { IOrder } from './../../inferfaces/order';

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
  hasCatalog: boolean = false;
  id_company: string = "";
  id_customer: string = "";
  id_catalog: string = "";

  constructor(
    public requestService: RequestsService,
    public toolsService: ToolsService,
    public authService: AuthenticationsService,
    public modalCtrl: ModalController,
    public ShopCartSrc: ShoppingCartService,
    public ShopBagSrc: ShoppingBagService
  ) { }

  ngOnInit() {}

  ionViewWillEnter() {
    if ( this.authService.getLoginSuccessful() ) {
      this.id_company = this.authService.getCompanyID();
      this.id_catalog = this.authService.getCatalogID(),
      this.loadCatalog();
    } else {
      this.ShopCartSrc.clearCatalog();
      this.authService.setLogout();
    }
  }

  private loadCatalog(){
    if(this.authService.getCheckin()){
      if(!this.ShopCartSrc.catalogLoaded()){
        this.loadCustomerCatalog();
      } else {
        this.hasCatalog = true;
      }
    } else {
      this.ShopCartSrc.clearCatalog();
      this.toolsService.showToast("Faça checkin para carregar o cardapio");
      this.toolsService.goToPage('checkins');
    }
  }

  private async loadCustomerCatalog() {
    this.ShopCartSrc.clearCatalog();
    return new Promise(res => {
      this.requestService.getRequestById(this.url, 'company', this.id_company).subscribe(dataResponse => {
        if (dataResponse['success']) {
          for (let product of dataResponse['result']) {
            this.ShopCartSrc.appCatalog.push(product);
          }
          this.hasCatalog = true;
        } else {
          this.hasCatalog = false;
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

    if(data){

      this.id_item = data.id_item;
      this.quantity = data.quantity;
      this.customer_note = data.customer_note;

      let item: IOrderItem = {
        order_item_name: (await this.ShopBagSrc.nextOrderItem("item")).toString(),
        id_catalog: this.id_catalog,
        id_product: product.id_product,
        item_product_name: product.product_name,
        item_quantity: data.quantity,
        item_unit_price: product.catalog_item_price,
        item_total_price: data.total_price,
        item_note: data.customer_note
      }

      if(data.quantity > 0){
        let order: IOrder = await this.ShopBagSrc.getOrder("order");
        console.log("getOrder",order);
        if(!order) {
          let order: IOrder = {
            order_name: "order",
            id_company: this.id_company,
            id_customer: this.id_customer,
            order_item_quantity: item.item_quantity,
            order_total_price: item.item_quantity * item.item_unit_price,
            order_status: 1,
            order_payment_status: 1,
            order_payment_method: "Cartao de Credito",
            id_payment_method: 1
          }
          this.ShopBagSrc.setOrder(order);
          console.log("setOrder",order);
        } else {
          this.ShopBagSrc.increaseOrder(order,item);
          console.log("increaseOrder",order);
        }
        this.ShopBagSrc.setOrderItem(item);
        console.log("increaseItem",item);
        this.toolsService.showToast(item.item_product_name + " adicionado ao pedido");
      }

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