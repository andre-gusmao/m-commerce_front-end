import { Component, OnInit } from '@angular/core';
import { AuthenticationsService } from 'src/app/services/authentications/authentications.service';
import { ToolsService } from 'src/app/services/tools/tools.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.page.html',
  styleUrls: ['./shopping-cart.page.scss'],
})
export class ShoppingCartPage implements OnInit {

  totalOrder: number = 0;
  orderItems: any = [];
  teste: string = "";

  constructor(
    public toolsService: ToolsService,
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

}