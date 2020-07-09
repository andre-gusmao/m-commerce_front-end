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
      this.orderList = [];
      this.loadOrders();
    } else {
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

  public loadOrders() {

    return new Promise(res => {

      this.requestService.getRequestById(this.url, 'customer', this.authService.getProfileID()).subscribe(dataResponse => {

        for (let order of dataResponse['result']) {
          this.orderList.push(order);
        }

      }, error => {
        this.toolsService.showAlert();
      })

    });
  }

  async showOrder(order: any){

    const orderDetails = await this.modalCtrl.create({
      component: CustomersOrdersDetailPage,
      componentProps: {
        id_order: order.id_order
      }
    });

    await orderDetails.present();
    orderDetails.onWillDismiss();

  }

}