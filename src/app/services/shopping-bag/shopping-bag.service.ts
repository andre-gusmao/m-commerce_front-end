import { Injectable } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx'

@Injectable({
  providedIn: 'root'
})
export class ShoppingBagService {

  constructor(private nativeStorage: NativeStorage) { }

  public createOrder(order: string){
    this.nativeStorage.setItem("order",{
      id_company: '',
      id_customer: '',
      order_total_price: '',
      order_status: '',
      order_payment_status: '',
      order_payment_method: '',
      id_payment_method: ''
    })
    .then(
      () => console.log("Pedido criado"),
      error => console.error("Pedido não foi criado ", error)
    );
  }

  public clearOrder(){
    this.nativeStorage.clear()
    .then(
      () => console.log("Limpeza efetuada"),
      error => console.error("Limpeza não efetuada")
    );
  }

  public insertItems(){}

  public clearItem(){}
}
