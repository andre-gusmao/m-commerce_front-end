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
  orderListBkp: any = [];
  url: string = 'customers/orders.php';
  newStatus: string = "0";
  hasOrders: boolean = false;
  canceled: boolean = false;
  interval: any;
  searchbar: string = "";
  id_company: string = "";
  id_worker: string = "";
  statusFilter: Array<string> = ["2","3","4"];

  constructor(
    public requestService: RequestsService,
    public toolsService: ToolsService,
    public authService: AuthenticationsService,
    public modalCtrl: ModalController
  ) { }

  ngOnInit() {}

  ionViewWillEnter() {
    if (this.authService.getLoginSuccessful()) {
      this.id_company = this.authService.getProfileID();
      this.loadOrders();
      this.interval = setInterval(() => { this.loadOrders(); },60000);
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
          this.orderListBkp = this.orderList;
          this.filterByStatus();
        } else {
          this.hasOrders = false;
        }
      }, error => {
        this.toolsService.showAlert();
      })
    });
  }

  public async filterOrder(){
    this.orderList = this.orderListBkp;

    if(!this.searchbar.trim()){
      return;
    }

    this.orderList = this.orderList.filter(currentOrder => {
      if(this.searchbar.trim()){
        return (currentOrder.id_order.indexOf(this.searchbar.trim()) > -1 || currentOrder.order_date.indexOf(this.searchbar.trim()) > -1 || currentOrder.order_status.toLowerCase().indexOf(this.searchbar.toLowerCase().trim()) > -1);
      } 
    })
  }

  private filterByStatus(){
    this.orderList = this.orderListBkp;

    this.orderList = this.orderList.filter(currentOrder => {
      return this.statusFilter.indexOf(currentOrder.order_status_id) > -1;
    })
  }

  public async actionWithOrder(id_order){
    let dataRequest = {
      id_order: id_order,
      id_worker: "",
      id_company: this.id_company,
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
    this.id_worker = data.id_worker;

    if(this.newStatus != '0'){
      dataRequest.order_status = this.newStatus;
      dataRequest.id_worker = this.id_worker;
      this.requestService.postRequest(dataRequest, this.url).subscribe(async dataResponse => {
        if (dataResponse['success']) {
          this.toolsService.showToast(dataResponse['message'],2000,'success');
          if(this.newStatus == '6'){
            this.cancelOrder(id_order);
          }
          this.loadOrders();
        }else{
          this.toolsService.showToast(dataResponse['message'],2000,'warning');
        }
      });
    }
  }

  private async cancelOrder(id_order: string){
    let dataRequest: any;
    let urlTotalCancel: string = "yapay/totalCancel.php";
    dataRequest = {
      id_order: id_order
    }
    await this.requestService.putRequest(dataRequest,urlTotalCancel).subscribe(async dataResponse => {
      if(dataResponse['success']){
        this.canceled = true;
        this.toolsService.showToast(dataResponse['message'],2000,'success');
      } else {
        this.canceled = false;
        this.toolsService.showToast(dataResponse['message'],2000,'warning');
      }
      console.log("dataResponse",dataResponse);
    }, error => {
      console.log("error",error);
      this.toolsService.showToast("Não foi possível cancelar a transação",2000,"danger");
    });
  }

  public refreshStatusFilter(){
    this.filterByStatus();
  }

}
