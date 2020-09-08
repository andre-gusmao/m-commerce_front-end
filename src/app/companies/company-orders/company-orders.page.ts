import { Component, OnInit, Input } from '@angular/core';
import { AuthenticationsService } from 'src/app/services/authentications/authentications.service';
import { RequestsService } from 'src/app/services/requests/requests.service';
import { ModalController } from '@ionic/angular';
import { ToolsService } from 'src/app/services/tools/tools.service';
import { CompanyOrderDetailsPage } from '../company-order-details/company-order-details.page';

@Component({
  selector: 'app-company-orders',
  templateUrl: './company-orders.page.html',
  styleUrls: ['./company-orders.page.scss'],
})
export class CompanyOrdersPage implements OnInit {
  
  @Input() id_order: string;
  orderList: any = [];
  url: string = 'customers/orders.php';
  newStatus: string = "0";
  hasOrders: boolean = false;
  interval: any;

  constructor(
    public requestService: RequestsService,
    public toolsService: ToolsService,
    public authService: AuthenticationsService,
    public modalCtrl: ModalController
  ) { }

  ngOnInit() {}

  ionViewWillEnter() {
    if (this.authService.getLoginSuccessful()) {
      this.loadOrders();
      this.interval = setInterval(() => { this.loadOrders(); },5000);
    } else {
      this.authService.setLogout();
    }
  }

  ionViewDidLeave(){
    clearInterval(this.interval);
  }

  autoRefresh(){
    this.ionViewWillEnter();
  }

  doRefresh(event) {
    setTimeout(() => {
      this.ionViewWillEnter();
      event.target.complete();
    }, 500);
  }

  loadData(event) {
    setTimeout(() => {
      this.loadOrders().then(() => {
        event.target.complete();
      });
    }, 500);
  }

  public async loadOrders() {
    this.orderList = [];
    return await new Promise(res => {
      this.requestService.getRequestById(this.url, 'company', this.authService.getProfileID()).subscribe(dataResponse => {
        if(dataResponse['success']) {
          for (let order of dataResponse['result']) {
            this.orderList.push(order);
          }
          this.hasOrders = true;
        } else {
          this.hasOrders = false;
        }
      }, error => {
        this.toolsService.showAlert();
      })
    });
  }

  public async actionWithOrder(id_order){

    let dataRequest = {
      id_order: id_order,
      order_status: "0"
    }

    const orderDetails = await this.modalCtrl.create({
      component: CompanyOrderDetailsPage,
      componentProps: {
        id_order: id_order
      }
    });

    await orderDetails.present();

    const { data } = await orderDetails.onWillDismiss();
    this.newStatus = data.newStatus;

    if(this.newStatus != '0'){

      dataRequest.order_status = this.newStatus;

      this.requestService.postRequest(dataRequest, this.url).subscribe(async dataResponse => {
        if (dataResponse['success']) {
          this.toolsService.showToast(dataResponse['message'],2000,'success');
          this.loadOrders();
        }else{
          this.toolsService.showToast(dataResponse['message'],2000,'warning');
        }
      });

    } 

  }

}
