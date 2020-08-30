import { Injectable } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { IOrder } from '../../inferfaces/order';
import { IOrderItem } from '../../inferfaces/orderItem';

@Injectable({
  providedIn: 'root'
})
export class ShoppingBagService {

  constructor(private nativeStorage: NativeStorage) { }

  /* order functions */
  public insertOrder(order: IOrder){
    let result: boolean;
    this.nativeStorage.setItem(
      order.order_name,
      {
        order_name: order.order_name,
        id_company: order.id_company,
        id_customer: order.id_customer,
        order_item_quantity: order.order_item_quantity,
        order_total_price: order.order_total_price,
        order_status: order.order_status,
        order_payment_status: order.order_payment_status,
        order_payment_method: order.order_payment_method,
        id_payment_method: order.id_payment_method
      }
    )
    .then(
      () => { 
        console.log("Inserted order", order.order_name);
        result = true;
      },
      error => { 
        console.warn("Order was not entered ", error);
        result = false;
      }
    );
    return result;
  }

  public deleteOrder(order_name: string = ""){
    let result: boolean;
    this.nativeStorage.remove(order_name)
    .then(
      () => {
        console.log("Deleted order");
        result = true;
      },
      error => {
        console.warn("Order has not been deleted ", error);
        result = false;
      }
    );
    return result;
  }

  public getOrder(order_name: string = ""){
    let order: IOrder;
    this.nativeStorage.getItem(order_name)
      .then( function (res){
        order = {
            order_name: res.order_name,
            id_company: res.id_company,
            id_customer: res.id_customer,
            order_item_quantity: res.order_item_quantity,
            order_total_price: res.order_total_price,
            order_status: res.order_status,
            order_payment_status: res.order_payment_status,
            order_payment_method: res.order_payment_method,
            id_payment_method: res.id_payment_method
          }
          console.info("Order found ", order);
        }, function (error) {
          console.warn("Order not found ", error)
        }
      );
    return order;
  }

  public increaseOrder(order_name: string = "", order_item_name: string = ""){
    let order = this.getOrder(order_name);
    let item = this.getItem(order_item_name);
    let order_item_quantity = order.order_item_quantity + item.item_quantity;
    let order_total_price = order.order_total_price + item.item_total_price;
    let newOrder: IOrder = {
      order_name: order.order_name,
      id_company: order.id_company,
      id_customer: order.id_customer,
      order_item_quantity: order.order_item_quantity + item.item_quantity,
      order_total_price: order_total_price,
      order_status: order.order_status,
      order_payment_status: order.order_payment_status,
      order_payment_method: order.order_payment_method,
      id_payment_method: order.id_payment_method
    }
    this.deleteOrder(order.order_name);
    this.insertOrder(newOrder);
  }

  public decreaseOrder(order_name: string = "", order_item_name: string = ""){
    let order = this.getOrder(order_name);
    let item = this.getItem(order_item_name);
    let order_item_quantity = order.order_item_quantity - item.item_quantity;
    let order_total_price = order.order_total_price - item.item_total_price;
    let newOrder: IOrder = {
      order_name: order.order_name,
      id_company: order.id_company,
      id_customer: order.id_customer,
      order_item_quantity: order_item_quantity,
      order_total_price: order_total_price,
      order_status: order.order_status,
      order_payment_status: order.order_payment_status,
      order_payment_method: order.order_payment_method,
      id_payment_method: order.id_payment_method
    }
    this.deleteOrder(order.order_name);
    if(order_item_quantity > 0) {
      this.insertOrder(newOrder);
    }
  }

  /* order item functions */
  public insertItem(item: IOrderItem){
    let result: boolean;
    this.nativeStorage.setItem(
      item.order_item_name,
      {
        order_item_name: item.order_item_name,
        id_catalog: item.id_catalog,
        id_product: item.id_product,
        item_product_name: item.item_product_name,
        item_quantity: item.item_quantity,
        item_unit_price: item.item_unit_price,
        item_total_price: item.item_total_price,
        item_note: item.item_note
      }
    )
    .then(
      () => { 
        console.log("Inserted item", item.order_item_name);
        result = true;
      },
      error => {
        console.warn("Item was not entered ", error);
        result = false;
      }
    );
    return result;
  }

  public deleteItem(order_item_name: string = ""){
    let result: boolean;
    this.nativeStorage.remove(order_item_name)
    .then(
      () => {
        console.log("Deleted item", order_item_name);
        result = true;
      },
      error => {
        console.warn("Item has not been deleted ", error);
        result = false;
      }
    );
    return result;
  }

  public getItem(order_item_name: string = "") {
    let item: IOrderItem;
    this.nativeStorage.getItem(order_item_name)
      .then( function (res){
        console.info("Item found ", res.order_item_name);
        item = {
          order_item_name: res.order_item_name,
          id_catalog: res.id_catalog,
          id_product: res.id_product,
          item_product_name: res.item_product_name,
          item_quantity: res.item_quantity,
          item_unit_price: res.item_unit_price,
          item_total_price: res.item_total_price,
          item_note: res.item_note
        }
        console.info(item);
        }, function (error) {
          console.warn("Item not found", order_item_name);
        }
      );
    return item;
  }

  public getItems(prefix: string = ""){
    let keys: any[];
    this.nativeStorage.keys()
      .then( function (data) {
        keys = data;
        console.info("keys ", keys);
      }, function (error) {
        console.error("No keys found", error);
      }
    );
  }

  public increaseItem(order_item_name: string = ""){
    let item = this.getItem(order_item_name);
    let newOrderItem: IOrderItem = {
      order_item_name: item.order_item_name,
      id_catalog: item.id_catalog,
      id_product: item.id_product,
      item_product_name: item.item_product_name,
      item_quantity: item.item_quantity + 1,
      item_unit_price: item.item_unit_price,
      item_total_price: item.item_unit_price * (item.item_quantity + 1),
      item_note: item.item_note
    }
    this.deleteItem(order_item_name);
    this.insertItem(newOrderItem);
  }

  public decreaseItem(order_item_name: string = ""){
    let item = this.getItem(order_item_name);
    let newOrderItem: IOrderItem = {
      order_item_name: item.order_item_name,
      id_catalog: item.id_catalog,
      id_product: item.id_product,
      item_product_name: item.item_product_name,
      item_quantity: item.item_quantity + 1,
      item_unit_price: item.item_unit_price,
      item_total_price: item.item_unit_price * (item.item_quantity + 1),
      item_note: item.item_note
    }
    this.deleteItem(order_item_name);
    if(newOrderItem.item_quantity > 0) {
      this.insertItem(newOrderItem);
    }
  }

  public async nextOrderItem(){
    const item = await this.nextItem();
    return item;
  }

  private async nextItem(){
    let i: number = 0;
    let item: string = "";
    let hasItem: boolean = true;

    const p = new Promise((resolve, reject) => {
      resolve({
        while(hasItem){
          i++;
          item = "item" + i.toString();
          hasItem = this.isStored("item");
        }        
      });
      reject({
        item: "item1"
      });
    });

    p.then( item => {
      console.log("nextItem resolve",item);
      return item;
    })
    .catch( error => {
      console.log("nextItem catch");
      return "item1";
    })
  }

  public proxItem(){
    let i: number = 0;
    let item: string = "";
    let hasItem: boolean = true;
    this.nativeStorage.setItem("item1","abacaxi")
  }

  public async getKey(key: string): Promise<void>{
    return await this.nativeStorage.getItem(key).then( (key) => {
      console.log("getKey ", key);
    } );
  }

  /* storage functions */
  public clearStorage(){
    let result: boolean;
    this.nativeStorage.clear()
      .then(
        () => {
          console.info("Storage is clean");
          result = true;
        },
        error => { 
          console.warn("Unable to clear storage ", error);
          result = false;
        }
      );
    return result;
  }

  public async isStored(item: string = ""){
    let result: boolean = false;
    await this.nativeStorage.getItem(item)
      .then( function (res){
          result = true;
        }, function (error) {
          result = false;
        }
      );
    return result;
  }
}
