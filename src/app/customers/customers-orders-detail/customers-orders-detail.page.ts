import { IOrder } from './../../inferfaces/order';
import { Component, OnInit, Input } from '@angular/core';
import { AuthenticationsService } from 'src/app/services/authentications/authentications.service';
import { RequestsService } from 'src/app/services/requests/requests.service';
import { ModalController } from '@ionic/angular';
import { ToolsService } from 'src/app/services/tools/tools.service';
import { ICreditCard } from './../../inferfaces/creditCard';
import { ShoppingBagService } from 'src/app/services/shopping-bag/shopping-bag.service';
import { ShoppingCartCardPage } from '../shopping-cart-card/shopping-cart-card.page';

@Component({
  selector: 'app-customers-orders-detail',
  templateUrl: './customers-orders-detail.page.html',
  styleUrls: ['./customers-orders-detail.page.scss'],
})
export class CustomersOrdersDetailPage implements OnInit {
  
  @Input() id_order: string;
  credit_card: ICreditCard;
  totalOrder: number = 0;
  orderItems: any = [];
  company_name: string;
  order_date: string;
  order_status: string;
  order_status_id: string;
  order_total_price: string;
  itemsList: any = [];
  hasCreditCard: boolean = false;
  authorized: boolean = false;
  card_number: string = "";
  order: IOrder;
  url: string = 'customers/orders.php';

  constructor(
    public requestService: RequestsService,
    public ShopBagSrc: ShoppingBagService,
    public toolsService: ToolsService,
    public authService: AuthenticationsService,
    public modalCtrl: ModalController
  ) {
    this.creditCardExists();
  }

  ngOnInit() {
    if(this.id_order != ""){
      this.loadOrderDetails(this.id_order);
    }
  }

  ionViewWillEnter() {
    if (!this.authService.getLoginSuccessful()) {
      this.authService.setLogout();
    }
  }

  public closeOrderDetails(){
    this.modalCtrl.dismiss().then(
      () => { this.modalCtrl = null }
    );
  }

  private async loadOrderDetails(id_order){
    return new Promise(res => {
      this.requestService.getRequestById(this.url, 'order', this.id_order).subscribe(dataResponse => {
        for (let item of dataResponse['result']) {
          this.company_name = item.company_name;
          this.order_date = item.order_date;
          this.order_status_id = item.order_status;
          this.order_status = this.toolsService.decodeOrderStatus( item.order_status );
          this.order_total_price = item.order_total_price;
          this.itemsList.push(item);
        }
      }, error => {
        this.toolsService.showAlert();
      })
    });
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

  public removeCreditCard(){
    this.ShopBagSrc.remove("creditCard");
    this.hasCreditCard = false;
    this.card_number = "";
  }

  public changeCreditCard(){
    this.removeCreditCard();
    this.addCreditCard()
  }

  public async payOrder(){
    let dataRequest: any;
    let urlAuthorize: string = "yapay/authorize.php";

    dataRequest = {
      id_order: this.id_order,
      order_total_price: this.ShopBagSrc.moneyFormat( parseFloat(this.order_total_price) ),
      card_printed_name: this.credit_card.card_printed_name,
      card_number: this.credit_card.card_number,
      card_security_code: this.credit_card.card_security_code,
      card_expiration_month: this.credit_card.card_expiration_month,
      card_expiration_year: this.credit_card.card_expiration_year,
      cpf: this.credit_card.customer_cpf,
      items: []
    }

    for(let i = 0; i < this.itemsList.length; i++){
      dataRequest.items.push({
        item_quantity: this.itemsList[i].item_quantity.toString(),
        item_unit_price: this.ShopBagSrc.moneyFormat( parseFloat(this.itemsList[i].item_total_price ) )
      });
    }

    this.toolsService.showLoading("Efetuando pagamento");

    await this.requestService.postRequest(dataRequest, urlAuthorize).subscribe(async dataResponse => {
      if (dataResponse['success']) {
        this.authorized = true;
        this.order_status_id = "2";
        this.ShopBagSrc.clearOrder();
        await this.toolsService.hideLoading();
        await this.toolsService.showToast(dataResponse['message'],2000,'success');
        this.closeOrderDetails();
      } else {
        this.authorized = false;
        await this.toolsService.hideLoading();
        this.toolsService.showToast(dataResponse['message'],2000,'warning');
      }
    }, error => {
      this.toolsService.hideLoading().finally(() => {
        this.toolsService.showToast("Não foi possível autorizar a transação",2000,"danger");
      })
    });
  }

}