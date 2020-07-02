import { Component, OnInit, Input } from '@angular/core';
import { AuthenticationsService } from 'src/app/services/authentications/authentications.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.page.html',
  styleUrls: ['./item-details.page.scss'],
})
export class ItemDetailsPage implements OnInit {

  @Input() id_item: string;
  @Input() product_name: string;
  @Input() item_price: number;
  @Input() catalog_note: string;
  @Input() customer_note: string;
  @Input() quantity: number;
  @Input() total_price: number;

  constructor(
    public authService: AuthenticationsService,
    public modalCtrl: ModalController
  ) { }

  ngOnInit() { }

  ionViewWillEnter() {
    if (!this.authService.getLoginSuccessful()) {
      this.authService.setLogout();
    }
  }

  public closeItemDetails(){
    this.modalCtrl.dismiss().then(
      () => { this.modalCtrl = null }
    );
  }

  public incraseItem(): void {
    this.quantity += 1;
    this.totalizeItem();
  }

  public decraseItem(): void {
    if(this.quantity > 1) {
      this.quantity -= 1;
      this.totalizeItem();
    }
  }

  public totalizeItem(){
    this.total_price = this.item_price * this.quantity;
    console.log("quantity: " + this.quantity + " total_price: " + this.total_price);
  }

  public registerItem(){

    this.modalCtrl.dismiss({
      'dismissed': true,
      'id_item': this.id_item,
      'quantity': this.quantity,
      'total_price': this.total_price,
      'customer_note': this.customer_note
    });


  }

}

// let orderItem = {
//   //id_order: auto
//   id_company: this.authService.getCompanyID(),
//   id_customer: this.authService.getProfileID(),
//   order_total_price: data.total_price,
//   order_status: "Nao enviado",
//   order_payment_status: "Pendente",
//   order_payment_method: "Cartao de Credito",
//   id_payment_method: "1",
//   items: {
//     //id_order_item: auto,
//     //id_order: auto,
//     id_catalog: this.authService.getCatalogID(),
//     id_product: product.id_product,
//     item_product_name: product.product_name,
//     item_quantity: data.quantity,
//     item_unit_price: product.catalog_item_price,
//     item_total_price: data.total_price,
//     item_note: data.customer_note
//   }
// }