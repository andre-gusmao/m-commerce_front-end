import { Component, OnInit } from '@angular/core';
import { AuthenticationsService } from 'src/app/services/authentications/authentications.service';
import { ToolsService } from 'src/app/services/tools/tools.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart/shopping-cart.service';
import { RequestsService } from '../../services/requests/requests.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.page.html',
  styleUrls: ['./shopping-cart.page.scss'],
})
export class ShoppingCartPage implements OnInit {

  totalOrder: number = 0;
  orderItems: any = [];
  teste: string = "";
  url: string = 'customers/orders.php';
  listPage: string = 'customers-orders';

  constructor(
    public toolsService: ToolsService,
    public requestService: RequestsService,
    public ShopCartSrc: ShoppingCartService,
    public authService: AuthenticationsService
  ) { }

  ngOnInit() {}

  ionViewWillEnter() {
    if (this.authService.getLoginSuccessful()) {
      this.loadOrderItems();
    } else {
      this.authService.setLogout();
    }
  }

  private loadOrderItems(){
    this.orderItems = [];
    this.orderItems = this.ShopCartSrc.getOrderItems();
    if(this.orderItems.length > 0) {
      this.totalOrder = this.orderItems[0].order_total_price;
      this.totalOrder = this.orderItems[0].items.reduce( (sum,item) => {
        return sum + item[0].item_total_price;
      }, 0);
    }
  }

  public upItem(i: number = 0){
    this.ShopCartSrc.incraseItem(i);
    this.ionViewWillEnter();
  }

  public downItem(i: number = 0){
    this.ShopCartSrc.decraseItem(i);
    this.ionViewWillEnter();
  }

  public async registerOrder(){

    let dataRequest = {
      id_company: 1,
      id_customer: 1,
      order_total_price: 11.11,
      order_status: 1,
      order_payment_status: 1,
      order_payment_method: 'CARTAO DE CREDITO',
      items: []
    }
    console.log(dataRequest);
    // for(i = 0; i <= this.orderItems.length; i++){
    for(let i = 1; i <= 2; i++){
      dataRequest.items.push(
        {
          id_catalog: 1,
          id_product: i,
          item_product_name: 'Produto ' + i.toString(),
          item_quantity: i,
          item_unit_price: i * 1,
          item_total_price: i * 10,
          item_note: 'Observacao ' + i.toString()
        }
      );
    }

    console.log('dataRequest');
    console.log(dataRequest);

    this.requestService.postRequest(dataRequest, this.url).subscribe(async dataResponse => {
      if (dataResponse[0]['success']) {
        this.toolsService.showToast(dataResponse[0]['message'],2000,'success');
        this.toolsService.goToPage(this.listPage);
      }else{
        this.toolsService.showToast(dataResponse[0]['message'],2000,'warning');
      }
      console.log('dataResponse');
      console.log(dataResponse);
    });

  }

}