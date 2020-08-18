import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationsService } from '../../services/authentications/authentications.service';
import { ToolsService } from 'src/app/services/tools/tools.service';
import { RequestsService } from '../../services/requests/requests.service';

@Component({
  selector: 'app-workers',
  templateUrl: './workers.page.html',
  styleUrls: ['./workers.page.scss'],
})
export class WorkersPage implements OnInit {

  id_worker: string = "";
  id_company: string = "";
  worker_cpf: string = "";
  worker_name: string = "";
  worker_cell_phone: string = "";
  worker_email: string = "";
  worker_status: string = "";
  worker_password: string = "";
  worker_confirm_password: string = "";
  url: string = 'workers/workers.php';
  listPage: string = 'workers-list';

  constructor(
    private activatedRoute: ActivatedRoute,
    public requestService: RequestsService,
    public toolsService: ToolsService,
    public authService: AuthenticationsService
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.id_worker = params['id'];
    });
  }

  ngOnInit() {}

  ionViewWillEnter() {
    if (this.authService.getLoginSuccessful()) {
      if ((this.id_worker != undefined) && (this.id_worker != "")) {
        this.loadWorkers(this.id_worker);
      } else {
        this.cleanForm();
      }
      this.id_company = this.authService.getCompanyID();
    } else {
      this.authService.setLogout();
    }
  }

  async registerWorker(){

    let dataRequest = {
      id_company: this.id_company,
      worker_cpf: this.worker_cpf,
      worker_name: this.worker_name,
      worker_cell_phone: this.worker_cell_phone,
      worker_status: this.worker_status,
      profileType: '3',
      worker_email: btoa(this.worker_email.toLocaleLowerCase()),
      worker_password: btoa(this.worker_password.toLocaleLowerCase()),
    }

    const fields = [
      { value: this.worker_cpf, message: 'Informe o CPF', lenght: 11},
      { value: this.worker_name, message: 'Informe o nome'},
      { value: this.worker_cell_phone, message: 'Informe o celular', lenght: 15},
      { value: this.worker_status, message: 'Informe o status'},
      { value: this.worker_email, message: 'Informe o e-mail'},
      { value: this.worker_password, message: 'Informe a senha'}
    ]

    if (this.toolsService.validField(fields) == false){
      return;
    }

    if(this.toolsService.isValidCPF(this.worker_cpf) == false){
      return;
    }

    if (this.toolsService.validateEmail(this.worker_email, true) == false) {
      return;
    }

    if (this.toolsService.validatePassword(this.worker_password, true) == false) {
      return;
    }

    if (this.worker_password != this.worker_confirm_password) {
      this.toolsService.showToast('Senha e Confirme a senha devem ser iguais');
    }

    if (this.id_worker != undefined && this.id_worker != ""){
      dataRequest['id_worker'] = this.id_worker;
      dataRequest['request_type'] = 'update';
    }

    this.requestService.postRequest(dataRequest, this.url).subscribe(async dataResponse => {
      if (dataResponse['success']) {
        this.toolsService.showToast(dataResponse['message'],2000,'success');
        this.toolsService.goToPage(this.listPage);
      }else{
        this.toolsService.showToast(dataResponse['message'],2000,'warning');
      }
    });

  }

  private loadWorkers(id_worker: string): void {

    //this.toolsService.showLoading("Buscando entregador ...");

    let dataRequest = {
      id_worker: id_worker,
    };

    this.requestService.getRequestById(this.url, 'id',id_worker).subscribe(async data => {

        if (data['success']) {

          this.id_worker = data['result'][0]['id_worker'];
          this.id_company = data['result'][0]['id_company'];
          this.worker_cpf = data['result'][0]['worker_cpf'];
          this.worker_name = data['result'][0]['worker_name'];
          this.worker_cell_phone = data['result'][0]['worker_cell_phone'];
          this.worker_email = data['result'][0]['worker_email'];
          this.worker_status = data['result'][0]['worker_status'];
          this.worker_password = data['result'][0]['worker_password'];
          this.worker_confirm_password = data['result'][0]['worker_password'];

        } else {

          //this.toolsService.hideLoading();
          this.toolsService.showToast(data['message'], 2000, 'success');

        }

      }, error => {
        //this.toolsService.hideLoading();
        this.toolsService.showAlert();
      }

    );

    //this.toolsService.hideLoading();
  
  }

  private cleanForm(): void {
    this.worker_cpf = "";
    this.worker_name = "";
    this.worker_cell_phone = "";
    this.worker_status = "";
    this.worker_email = "";
    this.worker_password = "";
  };
  
}
