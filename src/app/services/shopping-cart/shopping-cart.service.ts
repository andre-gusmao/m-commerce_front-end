import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  /* customer objects */
  orderItems: any = [];
  appCatalog: any = [];
  appCategory: any = [];
  items: any = [];

  /* company objects */
  companyOrders: any = [];

  constructor() { }

  /* customer functions */
  public insertOrder(orderItem){

    let order = {
      id_company: orderItem.id_company,
      id_customer: orderItem.id_customer,
      order_total_price: orderItem.order_total_price,
      order_status: orderItem.order_status,
      order_payment_status: orderItem.order_payment_status,
      order_payment_method: orderItem.order_payment_method,
      id_payment_method: orderItem.id_payment_method,
      // order_date: default
      // order_time: default
      items: []
    }

    if(this.orderItems.length === 0) {
      this.orderItems.push(order);
    }
    
    this.items = new Array(orderItem.items);
    this.orderItems[0].items.push(this.items);
    this.refreshTotalOrder();
  }

  public decraseItem(i: number = 0){
    if(this.orderItems[0].items[i][0].item_quantity == 1){      
      this.orderItems[0].items.splice(i,1);
    } else {
      this.orderItems[0].items[i][0].item_quantity -= 1;
      this.orderItems[0].items[i][0].item_total_price = this.orderItems[0].items[i][0].item_quantity * this.orderItems[0].items[i][0].item_unit_price;
    }
    this.refreshTotalOrder();
  }

  public incraseItem(i: number = 0){
    this.orderItems[0].items[i][0].item_quantity += 1;
    this.orderItems[0].items[i][0].item_total_price = this.orderItems[0].items[i][0].item_quantity * this.orderItems[0].items[i][0].item_unit_price;
    this.refreshTotalOrder();
  }

  public refreshTotalOrder(){
    this.orderItems[0].order_total_price = this.orderItems[0].items.reduce( (sum,item) => {
      return sum + item[0].item_total_price;
    }, 0);
  }

  public haveItem(){
    if(this.orderItems.length >= 0) {
      return true;
    } else {
      return false;
    }
  }

  public getOrderItems(){
    return this.orderItems;
  }

  public catalogLoaded(): boolean {
    if(this.appCatalog.length === 0){
      return false;
    } else {
      return true;
    }
  }

  public categoriesLoaded(): boolean {
    if(this.appCategory.length === 0){
      return false;
    } else {
      return true;
    }
  }

  public clearOrderItems(){

    while(this.orderItems[0].items.length){
      this.orderItems[0].items.pop();
    }
    this.orderItems.pop();

  }

  /* company functions */
  public getCompanyOrders(){
    return this.companyOrders;
  }

  public setCompanyOrders(order: any = []){
    if(order){
      this.companyOrders.push(order);
    }
  }
  
}
