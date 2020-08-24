import { Injectable } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Injectable({
  providedIn: 'root'
})
export class ShoppingBagService {

  constructor(private nativeStorage: NativeStorage) { }

  public insertOrder(order: string = ""){
    this.nativeStorage.setItem(order,{
      id_company: '2',
      id_customer: '2',
      order_item_quantity: 3,
      order_total_price: '150,50',
      order_status: 'A',
      order_payment_status: '3',
      order_payment_method: 'Cartao de Credito',
      id_payment_method: '2'
    })
    .then(
      () => console.log("Pedido inserido"),
      error => console.warn("Pedido nao foi inserido ", error)
    );
  }

  public deleteOrder(order: string = ""){
    this.nativeStorage.remove(order)
    .then(
      () => console.log("Pedido excluido"),
      error => console.warn("Pedido nao foi excluido ", error)
    );
  }

  public getOrder(order: string = ""){
    this.nativeStorage.getItem(order)
      .then( function (order){
        console.info("id_company: ", order.id_company)
      }, function (error) {
          console.warn("getOrder ", error)
        }
      );
  }

  public insertItem(item: string = ""){
    this.nativeStorage.setItem(item,{
      id_catalog: '1',
      id_product: '5',
      item_product_name: 'Produto',
      item_quantity: '2',
      item_unit_price: '10,50',
      item_total_price: '21,00',
      item_note: 'Observacao'
    })
    .then(
      () => console.log("Item criado"),
      error => console.warn("Item nao foi criado ", error)
    );
  }

  public deleteItem(item: string = ""){
    this.nativeStorage.remove(item)
    .then(
      () => console.log("Item excluido"),
      error => console.warn("Item nao foi excluido ", error)
    );
  }

  public getItem(item: string = ""){
    this.nativeStorage.getItem(item)
      .then( function (item){
        console.info("id_catalog: ", item.id_catalog)
      }, function (error) {
          console.warn("Item not found", item);
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
