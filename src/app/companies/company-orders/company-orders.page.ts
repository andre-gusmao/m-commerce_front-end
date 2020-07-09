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
  orderAccepted: string = "0";

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
    } else {
      this.authService.setLogout();
    }
  }

  public loadOrders() {

    this.orderList = [];

    return new Promise(res => {

      this.requestService.getRequestById(this.url, 'company', '1'/*this.authService.getProfileID()*/).subscribe(dataResponse => {

        for (let order of dataResponse['result']) {
          this.orderList.push(order);
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
    this.orderAccepted = data.orderAccepted;

    if(this.orderAccepted != '0'){

      if(this.orderAccepted === "Y") {
        dataRequest.order_status = "1";//pendente
      } else if (this.orderAccepted === "N") {
        dataRequest.order_status = "5";//cancelado
      }

      this.requestService.putRequest(dataRequest, this.url).subscribe(async dataResponse => {
        if (dataResponse['success']) {
          this.toolsService.showToast(dataResponse['message'],2000,'success');
          //this.ionViewWillEnter();
        }else{
          this.toolsService.showToast(dataResponse['message'],2000,'warning');
        }
      });

    }

  }

}
