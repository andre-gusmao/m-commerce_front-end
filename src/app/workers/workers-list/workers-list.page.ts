import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../../services/requests/requests.service';
import { ToolsService } from 'src/app/services/tools/tools.service';
import { AlertController } from '@ionic/angular';
import { AuthenticationsService } from 'src/app/services/authentications/authentications.service';

@Component({
  selector: 'app-workers-list',
  templateUrl: './workers-list.page.html',
  styleUrls: ['./workers-list.page.scss'],
})
export class WorkersListPage implements OnInit {

  listWorkers: any[];
  id_worker: string = "";
  id_company: string = "";
  worker_name: string = "";
  worker_cell_phone: string = "";
  url: string = 'workers/workers.php';
  editPage: string = '/workers/';
  start: number = 0;
  limit: number = 10;
  hasWorker: boolean = false;

  constructor(
    public requestService: RequestsService,
    public toolsService: ToolsService,
    public alertCtrl: AlertController,
    public authService: AuthenticationsService
  ) { }

  ngOnInit() { }

  ionViewWillEnter() { 
    if (this.authService.getLoginSuccessful()) {
      this.start = 0;
      this.listWorkers = [];
      this.id_company = this.authService.getCompanyID();
      this.loadWorkers();
    } else {
      this.authService.setLogout();
    }
  }

  doRefresh(event) {
    setTimeout(() => {
      this.ionViewWillEnter();
      event.target.complete();
    }, 5000);
  }

  loadData(event) {
    this.start += this.limit;
    setTimeout(() => {
      this.loadWorkers().then(() => {
        event.target.complete();
      });
    }, 5000);
  }

  private async loadWorkers(){
    return new Promise(res => {
      this.requestService.getRequestById(this.url, 'company', this.id_company).subscribe(dataResponse => {
        if(dataResponse['success']) {
          for (let worker of dataResponse['result']) {
            worker['worker_cell_phone'] = this.toolsService.formattedPhone(worker['worker_cell_phone']);
            this.listWorkers.push(worker);
          }
          this.hasWorker = true;
        } else {
          this.hasWorker = false;
        }
      }, error => {
        this.toolsService.showAlert();
      })
    });
  }

  async activateWorker(id_worker: string,worker_status: string) {
    let dataRequest = {
      id_worker: id_worker,
      id_company: this.id_company,
      request_type: 'status',
      worker_status: ''
    }
    if(worker_status === 'A'){
      dataRequest.worker_status = 'I';
    } else {
      dataRequest.worker_status = 'A';
    }
    this.requestService.postRequest(dataRequest, this.url).subscribe(async dataResponse => {
      if (dataResponse['success']) {
        this.toolsService.showToast(dataResponse['message'],2000,'success');
        this.listWorkers = [];
        this.loadWorkers();
      }else{
        this.toolsService.showToast(dataResponse['message'],2000,'warning');
      }
    });
  }

  public edit(id_worker: string){
    this.toolsService.goToPage(this.editPage + id_worker);
  }

  public async delete(id_worker: string){
    let dataRequest = {
      id_worker: id_worker,
      request_type: 'delete'
    }
    const question = await this.alertCtrl.create({
      header: "Atenção!",
      message: "Confirma exclusão do entregador ?",
      buttons: [{
          text: "Não",
          role: 'cancel',
          handler: () => {}
        },
        {
          text: "Sim",
          handler: () => {
            this.requestService.postRequest(dataRequest, this.url).subscribe(async dataResponse => {
              if (dataResponse['success']) {
                window.alert("Entregador excluído");
              } else {
                window.alert("Entregador não foi excluído");
              }
              this.listWorkers = [];
              this.loadWorkers();
            }, error => {
              this.toolsService.showAlert();
            });
          }
        }
      ]
    })
    question.present();
  }

  public insert(){
    this.toolsService.goToPage(this.editPage);
  }

}
