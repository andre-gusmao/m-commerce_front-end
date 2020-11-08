import { async } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IOrder } from '../../inferfaces/order';
import { IOrderItem } from './../../inferfaces/orderItem';
import { ICreditCard } from './../../inferfaces/creditCard';

@Injectable({
  providedIn: 'root'
})
export class ShoppingBagService {

  constructor(public storage: Storage) { }
  /* storage functions */
  private async get(key: string){
    return await this.storage.get(key);
  }
  
  private async set(key: string, value: any){
    return await this.storage.set(key,value);
  }

  public async remove(key: string){
    return await this.storage.remove(key);
  }

  public async clear(){
    return await this.storage.clear();
  }

  private async length(){
    return await this.storage.length();
  }

  private async keys(){
    return await this.storage.keys();
  }

  private async forEach(seachText: string){
    let list: Array<any> = [];
    await this.storage.forEach((value, key, index) => {
      if(key.startsWith(seachText)){
        list.push(value);
      }
    });

    return list;
  }

  /* orderItem functions */
  public setOrderItem(item: IOrderItem){
    let result: boolean;

    this.storage.set(item.order_item_name,item)
    .then(
      () => { 
        result = true;
      },
      error => {
        result = false;
      }
    );
    return result;
  }

  public async getOrderItem(itemName: string){
    let orderItem: IOrderItem;
    await this.get(itemName).then((item) => { orderItem = item; });
    return orderItem;
  }

  public async getListOrderItem(itemName: string){
    let listOrderItem: Array<IOrderItem> = [];
    await this.forEach(itemName).then((item) => { listOrderItem = item; });
    return listOrderItem;
  }

  public async delOrderItem(itemName: string){
    return await this.remove(itemName);
  }

  public async increaseOrderItem(orderItem: IOrderItem){
    orderItem.item_quantity += 1;
    orderItem.item_total_price = orderItem.item_quantity * orderItem.item_unit_price;
    await this.delOrderItem(orderItem.order_item_name);
    await this.setOrderItem(orderItem);
  }

  public async decreaseOrderItem(orderItem: IOrderItem){
    orderItem.item_quantity -= 1;
    orderItem.item_total_price = orderItem.item_quantity * orderItem.item_unit_price;
    await this.delOrderItem(orderItem.order_item_name);
    if(orderItem.item_quantity > 0){
      await this.setOrderItem(orderItem);
    }
  }

  public async nextOrderItem(itemName: string){
    let listKeys = await this.keys();
    let i: number = 0;
    listKeys.sort();
    listKeys.forEach(isItem);
    i++;
    return itemName + i.toString();
    function isItem(item, index){
      if (listKeys[index].toString().startsWith(itemName)){
        i++;
      }
    }
  }

  /* order functions */
  public setOrder(order: IOrder){
    let result: boolean;

    this.storage.set(order.order_name,order)
    .then(
      () => { 
        result = true;
      },
      error => {
        result = false;
      }
    );
    return result;
  }

  public async getOrder(orderName: string){
    let order: IOrder;
    await this.get(orderName).then((orderResult) => { order = orderResult; });
    return order;
  }

  public async delOrder(orderName: string){
    return await this.remove(orderName);
  }

  public async increaseOrder(order: IOrder, orderItem: IOrderItem){
    order.order_item_quantity += orderItem.item_quantity;
    order.order_total_price += orderItem.item_total_price;
    await this.delOrder(order.order_name);
    await this.setOrder(order);
  }

  public async decreaseOrder(order: IOrder, orderItem: IOrderItem){
    if( (order.order_item_quantity > 0) && (order.order_total_price > 0) ){
      order.order_item_quantity -= 1;
      order.order_total_price -= orderItem.item_unit_price;
      await this.delOrder(order.order_name);
      if(order.order_item_quantity > 0) {
        await this.setOrder(order);
      }
    }
  }

  public async clearOrder(){
    let list = await this.keys();
    if(list){
      for(let i = 0; i < list.length; i++){
        if(list[i]!="creditCard") {
          await this.remove(list[i]);
          console.log("clearOrder",list[i]);
        }
      }
    }
  }

  public async hasCreditCard(){
    let hasCard: boolean = false;
    let creditCard: ICreditCard;
    await this.get("creditCard").then((card) => {creditCard = card});
    if (creditCard){
      hasCard = true;
    }
    return hasCard;
  }

  public async setCreditCard(creditCard: ICreditCard){
    let result: boolean;

    this.storage.set("creditCard",creditCard)
    .then(
      () => { 
        result = true;
        console.log("CreditCard Set OK");
      },
      error => {
        result = false;
        console.log("CreditCard Set Error");
      }
    );
    return result;    
  }

  public async getCreditCard(){
    let creditCard: ICreditCard;
    let storageCard = await this.storage.get("creditCard");
    if(storageCard){
      creditCard = {
        card_number: storageCard.card_number,
        card_expiration_month: storageCard.card_expiration_month,
        card_expiration_year: storageCard.card_expiration_year,
        card_security_code: storageCard.card_security_code,
        card_printed_name: storageCard.card_printed_name,
        customer_cpf: storageCard.customer_cpf
      }
    }
    return creditCard;
  }

}
