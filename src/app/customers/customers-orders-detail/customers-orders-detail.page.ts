import { Component, OnInit, Input } from '@angular/core';
import { AuthenticationsService } from 'src/app/services/authentications/authentications.service';
import { RequestsService } from 'src/app/services/requests/requests.service';
import { ModalController } from '@ionic/angular';
import { ToolsService } from 'src/app/services/tools/tools.service';

@Component({
  selector: 'app-customers-orders-detail',
  templateUrl: './customers-orders-detail.page.html',
  styleUrls: ['./customers-orders-detail.page.scss'],
})
export class CustomersOrdersDetailPage implements OnInit {
  
  @Input() id_order: string;
  company_name: string;
  order_date: string;
  order_status: string;
  order_total_price: string;
  itemsList: any = [];
  url: string = 'customers/orders.php';

  constructor(
    public requestService: RequestsService,
    public toolsService: ToolsService,
    public authService: AuthenticationsService,
    public modalCtrl: ModalController
  ) {}

  ngOnInit() {
    if(this.id_order != ""){
      this.loadOderDetails(this.id_order);
    }
  }

  ionViewWillEnter() {
    if (!this.authService.getLoginSuccessful()) {
      this.authService.setLogout();
    }
  }

  public closeOrderDetails(){
    this.modalCtrl.dismiss().then(
      () => { this.modalCtrl = null }
    );
  }

  private async loadOderDetails(id_order){

    return new Promise(res => {

      this.requestService.getRequestById(this.url, 'order', this.id_order).subscribe(dataResponse => {

        for (let item of dataResponse['result']) {
          this.company_name = item.company_name;
          this.order_date = item.order_date;
          //this.order_status = this.toolsService.decodeOrderStatus( item.order_status );
          this.order_status = item.order_status;
          this.order_total_price = item.order_total_price;
          this.itemsList.push(item);
        }
        
      }, error => {
        this.toolsService.showAlert();
      })

    });

  }

}