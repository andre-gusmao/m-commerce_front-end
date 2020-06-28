import { Component, OnInit, Input } from '@angular/core';
import { RequestsService } from 'src/app/services/requests/requests.service';
import { ToolsService } from 'src/app/services/tools/tools.service';
import { AlertController } from '@ionic/angular';
import { AuthenticationsService } from 'src/app/services/authentications/authentications.service';
import { ModalController, NavController } from '@ionic/angular';

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
    public requestService: RequestsService,
    public toolsService: ToolsService,
    public alertCtrl: AlertController,
    public authService: AuthenticationsService,
    public navCtrl: NavController,
    public modalCtrl: ModalController
  ) { }

  ngOnInit() { }

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
    if(this.quantity > 0) {
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
      'total_price': this.total_price
    })
  }

}