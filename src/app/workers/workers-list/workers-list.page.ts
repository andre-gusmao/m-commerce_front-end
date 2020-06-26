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
    }, 500);
  }

  loadData(event) {
    this.start += this.limit;
    setTimeout(() => {
      this.loadWorkers().then(() => {
        event.target.complete();
      });
    }, 500);
  }

  private async loadWorkers(){

    return new Promise(res => {

      this.requestService.getRequestById(this.url, 'company', this.id_company).subscribe(dataResponse => {

        for (let worker of dataResponse['result']) {
          this.listWorkers.push(worker);
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
      worker_status: ''
    }

    if(worker_status === 'A'){
      dataRequest.worker_status = 'I';
    } else {
      dataRequest.worker_status = 'A';
    }

    this.requestService.putRequest(dataRequest, this.url).subscribe(async dataResponse => {
      if (dataResponse['success']) {
        this.toolsService.showToast(dataResponse['message'],2000,'success');
        this.doRefresh(event);
      }else{
        this.toolsService.showToast(dataResponse['message'],2000,'warning');
      }
    });

}

  public edit(id_worker: string){
    this.toolsService.goToPage(this.editPage + id_worker);
  }

  public async delete(id_worker: string){

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
            this.requestService.deleteRequest(this.url, 'id', id_worker).subscribe(dataResponse => {
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
    question.present();}

  public insert(){
    this.toolsService.goToPage(this.editPage);
  }

}
