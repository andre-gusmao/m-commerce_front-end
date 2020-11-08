import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { AuthenticationsService } from 'src/app/services/authentications/authentications.service';
import { ToolsService } from 'src/app/services/tools/tools.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart/shopping-cart.service';
import { RequestsService } from '../../services/requests/requests.service';
import { ShoppingBagService } from 'src/app/services/shopping-bag/shopping-bag.service';
import { IOrderItem } from './../../inferfaces/orderItem';
import { IOrder } from './../../inferfaces/order';
import { ICreditCard } from './../../inferfaces/creditCard';
import { ModalController } from '@ionic/angular';
import { ShoppingCartCardPage } from '../shopping-cart-card/shopping-cart-card.page'

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.page.html',
  styleUrls: ['./shopping-cart.page.scss'],
})
export class ShoppingCartPage implements OnInit {

  @Input() credit_card: ICreditCard;
  totalOrder: number = 0;
  orderItems: any = [];
  url: string = 'customers/orders.php';
  listPage: string = 'customers-orders';
  hasCreditCard: boolean = false;
  card_number: string = "";

  constructor(
    public toolsService: ToolsService,
    public requestService: RequestsService,
    public ShopCartSrc: ShoppingCartService,
    public authService: AuthenticationsService,
    public modalCtrl: ModalController,
    public ShopBagSrc: ShoppingBagService
  ) { }

  ngOnInit() {}

  async ionViewWillEnter() {
    if (this.authService.getLoginSuccessful()) {
      this.creditCardExists();
      this.loadOrderItems();
    } else {
      this.authService.setLogout();
    }
  }

  public async addCreditCard(){
    const cart_card = await this.modalCtrl.create({
      component: ShoppingCartCardPage,
      componentProps: {
        credit_card: this.credit_card
      }
    });

    await cart_card.present();
    const { data } = await cart_card.onWillDismiss();

    if(data){
      this.credit_card = {
        card_number: data.card_number,
        card_expiration_month: data.card_expiration_month,
        card_expiration_year: data.card_expiration_year,
        card_security_code: data.card_security_code,
        card_printed_name: data.card_printed_name,
        customer_cpf: data.customer_cpf,
      }
      this.ShopBagSrc.setCreditCard(this.credit_card);
      this.creditCardExists();
    } else {
      console.log("Nenhum cartão adicionado")
    }
  }

  private async creditCardExists(){
    this.hasCreditCard = await this.ShopBagSrc.hasCreditCard();
    if(this.hasCreditCard){
      this.credit_card = await this.ShopBagSrc.getCreditCard()
      this.card_number = "Cartão final " + this.credit_card.card_number.substring(12);
    } else {
      this.card_number = "";
    }
  }

  private async loadOrderItems(){
    this.orderItems = [];
    this.orderItems = await this.ShopBagSrc.getListOrderItem("item");
    if(this.orderItems.length > 0) {
      this.totalOrder = this.orderItems.reduce( (sum,item) => { return sum + item.item_total_price; }, 0);
    } else {
      this.totalOrder = 0;
    }
  }

  public async upItem(order_item_name: string = ""){
    let order: IOrder = await this.ShopBagSrc.getOrder("order");
    let orderItem: IOrderItem = await this.ShopBagSrc.getOrderItem(order_item_name);
    if(orderItem){
      await this.ShopBagSrc.increaseOrder(order,orderItem);
      await this.ShopBagSrc.increaseOrderItem(orderItem);
    }
    this.ionViewWillEnter();
  }

  public async downItem(order_item_name: string = ""){
    let order: IOrder = await this.ShopBagSrc.getOrder("order");
    let orderItem: IOrderItem = await this.ShopBagSrc.getOrderItem(order_item_name);
    if(orderItem){
      await this.ShopBagSrc.decreaseOrder(order,orderItem);
      await this.ShopBagSrc.decreaseOrderItem(orderItem);
    }
    this.ionViewWillEnter();
  }

  public async registerOrder(){
    let order: IOrder = await this.ShopBagSrc.getOrder("order");

    let dataRequest = {
      id_company: this.authService.getCompanyID(),
      id_customer: this.authService.getProfileID(),
      id_checkin: this.authService.getTableID(),
      order_total_price: order.order_total_price,
      order_status: order.order_status,
      order_payment_status: order.order_payment_status,
      order_payment_method: order.order_payment_method,
      items: []
    }
    
    for(let i = 0; i < this.orderItems.length; i++){
      dataRequest.items.push(
        {
          id_catalog: this.authService.getCatalogID(),
          id_product: this.orderItems[i].id_product,
          item_product_name: this.orderItems[i].item_product_name,
          item_quantity: this.orderItems[i].item_quantity,
          item_unit_price: this.orderItems[i].item_unit_price,
          item_total_price: this.orderItems[i].item_quantity * this.orderItems[i].item_unit_price,
          item_note: this.orderItems[i].item_note
        }
      );
    }

    await this.requestService.postRequest(dataRequest, this.url).subscribe(async dataResponse => {
      if (dataResponse[0]['success']) {
        this.ShopBagSrc.clearOrder();
        this.toolsService.showToast(dataResponse[0]['message'],2000,'success');
        this.toolsService.goToPage(this.listPage);
      }else{
        this.toolsService.showToast(dataResponse[0]['message'],2000,'warning');
      }
    }, error => {
      this.toolsService.showAlert();
    });

  }

}