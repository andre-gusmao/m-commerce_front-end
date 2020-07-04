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
      id_company: this.authService.getCompanyID(),
      id_customer: this.authService.getProfileID(),
      order_total_price: this.ShopCartSrc.orderItems[0].order_total_price,
      order_status: this.ShopCartSrc.orderItems[0].order_status,
      order_payment_status: this.ShopCartSrc.orderItems[0].order_payment_status,
      order_payment_method: this.ShopCartSrc.orderItems[0].order_payment_method,
      items: []
    }
    console.log(dataRequest);
    for(let i = 0; i < this.orderItems[0].items.length; i++){
      dataRequest.items.push(
        {
          id_catalog: this.authService.getCatalogID(),
          id_product: this.ShopCartSrc.orderItems[0].items[i][0].id_product,
          item_product_name: this.ShopCartSrc.orderItems[0].items[i][0].item_product_name,
          item_quantity: this.ShopCartSrc.orderItems[0].items[i][0].item_quantity,
          item_unit_price: this.ShopCartSrc.orderItems[0].items[i][0].item_unit_price,
          item_total_price: this.ShopCartSrc.orderItems[0].items[i][0].item_quantity * this.ShopCartSrc.orderItems[0].items[i][0].item_unit_price,
          item_note: this.ShopCartSrc.orderItems[0].items[i][0].item_note
        }
      );
    }
    console.log("registerOrder");
    console.log(dataRequest);
    this.requestService.postRequest(dataRequest, this.url).subscribe(async dataResponse => {
      if (dataResponse[0]['success']) {
        this.toolsService.showToast(dataResponse[0]['message'],2000,'success');
        this.toolsService.goToPage(this.listPage);
      }else{
        this.toolsService.showToast(dataResponse[0]['message'],2000,'warning');
      }
    });

  }

}