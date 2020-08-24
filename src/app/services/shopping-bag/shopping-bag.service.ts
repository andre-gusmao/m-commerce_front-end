import { Injectable } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { IOrder } from '../../inferfaces/order';
import { IOrderItem } from '../../inferfaces/orderItem';

@Injectable({
  providedIn: 'root'
})
export class ShoppingBagService {

  constructor(private nativeStorage: NativeStorage) { }

  public insertOrder(order: IOrder){
    this.nativeStorage.setItem(
      order.order_name,{
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
      () => console.log("Inserted order"),
      error => console.warn("Order was not entered ", error)
    );
  }

  public deleteOrder(order_name: string = ""){
    this.nativeStorage.remove(order_name)
    .then(
      () => console.log("Deleted order"),
      error => console.warn("Order has not been deleted ", error)
    );
  }

  public getOrder(order_name: string = ""){
    this.nativeStorage.getItem(order_name)
      .then( function (order){
        console.info("id_company: ", order.id_company)
      }, function (error) {
          console.warn("Order not found ", error)
        }
      );
  }

  public insertItem(item: IOrderItem){
    this.nativeStorage.setItem(
      item.order_item_name,{
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
      () => console.log("Inserted item"),
      error => console.warn("Item was not entered ", error)
    );
  }

  public deleteItem(order_item_name: string = ""){
    this.nativeStorage.remove(order_item_name)
    .then(
      () => console.log("Deleted item"),
      error => console.warn("Item has not been deleted ", error)
    );
  }

  public getItem(order_item_name: string = ""){
    this.nativeStorage.getItem(order_item_name)
      .then( function (item){
        console.info("id_catalog: ", item.id_catalog)
      }, function (error) {
          console.warn("Item not found", order_item_name);
        }
      );
  }

  public getItems(value: number = 0){}

  public clearStorage(){
    this.nativeStorage.clear()
      .then(
        () => console.info("Storage is clean"),
        error => console.warn("Unable to clear storage ", error)
      );
  }
}
