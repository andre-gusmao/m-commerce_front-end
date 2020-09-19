import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AuthenticationsService } from 'src/app/services/authentications/authentications.service';
import { RequestsService } from 'src/app/services/requests/requests.service';
import { ToolsService } from 'src/app/services/tools/tools.service';

@Component({
  selector: 'app-workers-orders-detail',
  templateUrl: './workers-orders-detail.page.html',
  styleUrls: ['./workers-orders-detail.page.scss'],
})
export class WorkersOrdersDetailPage implements OnInit {
  
  @Input() id_order: string;
  company_name: string;
  order_date: string;
  order_time: string;
  order_status: string;
  order_status_id: string;
  order_status_text: string;
  order_total_price: string;
  itemsList: any = [];
  id_checkin: string;
  customer_name: string;
  customer_cell_phone: string;
  url: string = 'customers/orders.php';

  constructor(
    public requestService: RequestsService,
    public toolsService: ToolsService,
    public authService: AuthenticationsService,
    public modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    if (!this.authService.getLoginSuccessful()) {
      this.authService.setLogout();
    } else {
      this.loadOderDetails();
    }
  }

  private async loadOderDetails(){
    return new Promise(res => {
      this.requestService.getRequestById(this.url, 'order', this.id_order).subscribe(dataResponse => {
        for (let item of dataResponse['result']) {
          this.company_name = item.company_name;
          this.order_date = item.order_date;
          this.order_time = item.order_time;
          this.order_status = item.order_status;
          this.order_status_text = item.order_status_text;
          this.order_total_price = item.order_total_price;
          this.id_checkin = item.id_checkin;
          this.customer_name = item.customer_name;
          this.customer_cell_phone = item.customer_cell_phone;
          this.itemsList.push(item);
        }
      }, error => {
        this.toolsService.showAlert();
      })
    });
  }

  public updateOrder(status: string = '0'){
    this.modalCtrl.dismiss({
      'dismissed': true,
      'newStatus': status
    });
  }

}
