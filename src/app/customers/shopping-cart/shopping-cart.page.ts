import { Component, OnInit, Input } from '@angular/core';
import { AuthenticationsService } from 'src/app/services/authentications/authentications.service';
import { ToolsService } from 'src/app/services/tools/tools.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart/shopping-cart.service';
import { RequestsService } from '../../services/requests/requests.service';
import { ShoppingBagService } from 'src/app/services/shopping-bag/shopping-bag.service';
import { IOrderItem } from './../../inferfaces/orderItem';
import { IOrder } from './../../inferfaces/order';
import { ICreditCard } from './../../inferfaces/creditCard';
import { ModalController, AlertController } from '@ionic/angular';

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
  hasMoney: boolean = false;
  authorized: boolean = false;
  card_number: string = "";
  customer_cpf: string = "";
  hasCPF: boolean = false;
  catalog: string = '/customers-catalogs';
  cardList: ICreditCard[];
  cardButtons: any = [];

  constructor(
    public toolsService: ToolsService,
    public requestService: RequestsService,
    public ShopCartSrc: ShoppingCartService,
    public authService: AuthenticationsService,
    public modalCtrl: ModalController,
    public ShopBagSrc: ShoppingBagService,
    public alertCtrl: AlertController
  ) { }

  ngOnInit() {}

  ionViewWillEnter() {
    if (this.authService.getLoginSuccessful()) {
      this.loadOrderItems();
    } else {
      this.authService.setLogout();
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
      id_payment_method: order.id_payment_method,
      customer_cpf: this.customer_cpf,
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

    this.toolsService.showLoading("Registrando pedido");

    await this.requestService.postRequest(dataRequest, this.url).subscribe( async dataResponse => {
      if (dataResponse['success']) {
        //await this.toolsService.showToast(dataResponse['message'],1000,'success');
        await this.toolsService.hideLoading();
        if(order.id_payment_method === 1){
          await this.authorizeOrder(this.credit_card,dataResponse);
        }
      }else{
        await this.toolsService.showToast(dataResponse['message'],2000,'warning');
        await this.unauthorizedOrder(dataResponse['id_order']);
      }
    }, error => {
      this.toolsService.hideLoading().finally(() => {
        this.toolsService.showToast("Não foi possível enviar seu pedido",2000,"danger");
      });
    });
  }

  private async authorizeOrder(creditCard: ICreditCard, order: any){
    let dataRequest: any;
    let urlAuthorize: string = "yapay/authorize.php";

    dataRequest = {
      id_order: order.id_order.toString(),
      order_total_price: this.ShopBagSrc.moneyFormat( parseFloat(order.order_total_price) ),
      card_printed_name: creditCard.card_printed_name,
      card_number: creditCard.card_number,
      card_security_code: creditCard.card_security_code,
      card_expiration_month: creditCard.card_expiration_month,
      card_expiration_year: creditCard.card_expiration_year,
      cpf: creditCard.customer_cpf,
      items: []
    }

    for(let i = 0; i < order.items.length; i++){
      dataRequest.items.push({
        item_quantity: order.items[i].item_quantity.toString(),
        item_unit_price: this.ShopBagSrc.moneyFormat( parseFloat(order.items[i].item_unit_price ) )
      });
    }

    this.toolsService.showLoading("Efetuando pagamento");

    await this.requestService.postRequest(dataRequest, urlAuthorize).subscribe(async dataResponse => {
      if (dataResponse['success']) {
        this.authorized = true;
        this.clearOrderItems();
        this.ShopBagSrc.clearOrder();
        await this.toolsService.hideLoading();
        await this.toolsService.showToast(dataResponse['message'],1500,'success');
        this.toolsService.goToPage('customers-orders');
      } else {
        this.authorized = false;
        this.toolsService.showToast(dataResponse['message'],2000,'warning');
        await this.toolsService.hideLoading();
        await this.unauthorizedOrder(order.id_order);
      }
    }, error => {
      this.toolsService.hideLoading().finally(() => {
        this.toolsService.showToast("Não foi possível autorizar a transação",2000,"danger");
      })
    });
  }

  private async unauthorizedOrder(id_order: string = "0"){
    let dataRequest = {
      id_order: id_order,
      order_status: "7"
    }
    await this.requestService.postRequest(dataRequest, this.url).subscribe(async dataResponse => {
      if (dataResponse['success']) {
        console.info("unauthorizedOrder true");
      }else{
        console.info("unauthorizedOrder false");
      }
    });
  }

  private clearOrderItems(){
    while (this.orderItems.length){
      this.orderItems.pop();
    }
  }

  public removeCreditCard(){
    this.credit_card = null;
    this.hasCreditCard = false;
    this.card_number = "";
  }

  public changeCreditCard(){
    this.removeCreditCard();
    this.selectCreditCard()
  }

  public async addCPF(){
    const alert = await this.alertCtrl.create({
      header: 'Digite seu CPF',
      inputs: [{
        name: 'cpf',
        type: 'text'
      }
      ],
      buttons: [{
        text: 'Cancelar',
        role: 'cancel',
        handler: () => {}
      },{
        text: 'Ok',
        handler: (alertData) => {
          if(this.toolsService.isValidCPF(alertData.cpf) == true){
            this.hasCPF = true;
            this.customer_cpf = alertData.cpf;
          }
        }
      }]
    });

    await alert.present();
  }

  public clearCPF(){
    this.hasCPF = false;
    this.customer_cpf = "";
  }

  public async selectPayment() {
    const alert = await this.alertCtrl.create({
      header: 'Meio de pagametno',
      message: 'Selecione a forma de pagamento',
      buttons: [{
        text: 'Cartão de Crédito',
        handler: () => { this.selectCreditCard(); }
      }, {
        text: 'Dinheiro',
        handler: () => { this.setMoney() }
      }]
    });
    await alert.present();
  }

  public async selectCreditCard(){
    const alert = this.alertCtrl;
    this.clearCardList();
    this.cardList = await this.ShopBagSrc.getListCreditCard("creditCard");
    if(!this.cardList.length){
      const alert = await this.alertCtrl.create({
        header: 'Ops!!!',
        message: 'Você não tem cartão cadastrado. Deseja cadastrar um agora ?',
        buttons: [{
          text: "Sim",
          handler: () => { this.toolsService.goToPage('/creditcards'); }
        },{
          text: "Não",
          role: 'cancel'
        }]
      });
      await alert.present();
    } else {
      for(let i = 0; i < this.cardList.length; i++){
        this.cardButtons.push({
          text: this.getCreditCardLabel(this.cardList[i].card_number) +" final "+ this.cardList[i].card_number.substr(12,4),
          handler: () => {
            this.setCreditCard(this.cardList[i]);
          }
        });
      }
      const alert = await this.alertCtrl.create({
        header: 'Cartão de Crédito',
        message: 'Selecione o cartão de crédito',
        buttons: this.cardButtons
      });
      await alert.present();
    }
  }

  private async setCreditCard(creditCard: ICreditCard){
    this.credit_card = {
      card_number: creditCard.card_number,
      card_expiration_month: creditCard.card_expiration_month,
      card_expiration_year: creditCard.card_expiration_year,
      card_security_code: creditCard.card_security_code,
      card_printed_name: creditCard.card_printed_name,
      customer_cpf: creditCard.customer_cpf,
    }
    this.card_number = "Cartão final " + creditCard.card_number.substring(12);
    this.hasMoney = false;
    this.hasCreditCard = true;
    await this.ShopBagSrc.setPaymentMethod(1);
  }

  private clearCardList(){
    if(this.cardList){
      while(this.cardList.length){
        this.cardList.pop();
      }
    }
    while(this.cardButtons.length){
      this.cardButtons.pop();
    }
  }

  public getCreditCardLabel(cardNumber){
    var regexVisa = /^4[0-9]{12}(?:[0-9]{3})?/;
    var regexMaster = /^5[1-5][0-9]{14}/;
    var regexAmex = /^3[47][0-9]{13}/;
    var regexDiners = /^3(?:0[0-5]|[68][0-9])[0-9]{11}/;
    var regexDiscover = /^6(?:011|5[0-9]{2})[0-9]{12}/;
    var regexJCB = /^(?:2131|1800|35\d{3})\d{11}/;
    let label = '';
  
    if(regexVisa.test(cardNumber)){
     label = 'Visa';
    }
    if(regexMaster.test(cardNumber)){
      label = 'Master';
    }
    if(regexAmex.test(cardNumber)){
      label = 'Amex';
    }
    if(regexDiners.test(cardNumber)){
      label = 'Diners';
    }
    if(regexDiscover.test(cardNumber)){
      label = 'Discover';
    }
    if(regexJCB.test(cardNumber)){
      label = 'JCB';
    }
  
    if(label === '') {
      label = 'Outros';
    }

    return label;
  }

  private async setMoney(){
    this.hasMoney = true;
    this.hasCreditCard = false;
    await this.ShopBagSrc.setPaymentMethod(2);
  }

  public async removeMoney(){
    this.hasMoney = false;
  }

}