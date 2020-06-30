import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  orderItems: any = [];
  items: any = [];

  constructor() { }

  public insertOrder(orderItem){

    let order = {
      id_company: orderItem.id_company,
      id_customer: orderItem.id_customer,
      order_total_price: orderItem.order_total_price,
      order_status: orderItem.order_status,
      order_payment_status: orderItem.order_payment_status,
      order_payment_method: orderItem.order_payment_method,
      id_payment_method: orderItem.id_payment_method,
      items: []
    }

    if(this.orderItems.length === 0) {
      this.orderItems.push(order);
    }
    
    this.items = new Array(orderItem.items);
    this.orderItems[0].items.push(this.items);
    //console.log("teste");
  }

  public updateOrder(){}

  public deleteOrder(){}

  async loadOrder(){}

  async registerOrder(){}

  public getOrderItems(){
    return this.orderItems;
  }
}
