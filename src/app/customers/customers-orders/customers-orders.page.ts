import { Component, OnInit, Input } from '@angular/core';
import { ToolsService } from 'src/app/services/tools/tools.service';
import { AuthenticationsService } from 'src/app/services/authentications/authentications.service';
import { RequestsService } from 'src/app/services/requests/requests.service';
import { CustomersOrdersDetailPage } from '../customers-orders-detail/customers-orders-detail.page'
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-customers-orders',
  templateUrl: './customers-orders.page.html',
  styleUrls: ['./customers-orders.page.scss'],
})
export class CustomersOrdersPage implements OnInit {
  
  orderList: any = [];
  hasOrders: boolean = false;
  id_customer: string = "";
  url: string = 'customers/orders.php';
  catalog: string = '/customers-catalogs';

  constructor(
    public requestService: RequestsService,
    public toolsService: ToolsService,
    public modalCtrl: ModalController,
    public authService: AuthenticationsService
  ) {}

  ngOnInit() {}
  
  ionViewWillEnter() {
    if (this.authService.getLoginSuccessful()) {
      this.id_customer = this.authService.getProfileID();
      this.loadOrders();
    } else {
      this.clearOrderList();
      this.authService.setLogout();
    }
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
    this.clearOrderList();
    return new Promise(res => {
      this.requestService.getRequestById(this.url, 'customer', this.id_customer).subscribe(dataResponse => {
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

  public async showOrder(order: any){
    const orderDetails = await this.modalCtrl.create({
      component: CustomersOrdersDetailPage,
      componentProps: {
        id_order: order.id_order,
        order_status: order.order_status
      }
    });
    await orderDetails.present();
    orderDetails.onWillDismiss();
  }

  private clearOrderList(){
    while(this.orderList.length){
      this.orderList.pop();
    }
  }
}