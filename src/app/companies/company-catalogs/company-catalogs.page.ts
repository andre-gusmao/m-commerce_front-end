import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestsService } from 'src/app/services/requests/requests.service';
import { ToolsService } from 'src/app/services/tools/tools.service';
import { AuthenticationsService } from 'src/app/services/authentications/authentications.service';

@Component({
  selector: 'app-company-catalogs',
  templateUrl: './company-catalogs.page.html',
  styleUrls: ['./company-catalogs.page.scss'],
})
export class CompanyCatalogsPage implements OnInit {

  id_catalog: string;
  id_company: string;
  catalog_name: string;
  catalog_status: string;
  url: string = 'companies/companycatalogs.php';
  listPage: string = 'company-catalogs-list';

  constructor(
    private activatedRoute: ActivatedRoute,
    public requestService: RequestsService,
    public toolsService: ToolsService,
    public authService: AuthenticationsService
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.id_catalog = params['id'];
    });
  }

  ngOnInit() {}

  ionViewWillEnter() {
    if (this.authService.getLoginSuccessful()) {
      if ((this.id_catalog != undefined) && (this.id_catalog != "")) {
        this.loadCompanyCatalogs(this.id_catalog);
      } else {
        this.cleanForm();
        this.catalog_status = "I";
      }
      this.id_company = this.authService.getCompanyID();
    } else {
      this.authService.setLogout();
    }
  }

  async registerCompanyCatalogs(){

    let dataRequest = {
      id_company: this.id_company,
      catalog_name: this.catalog_name
    }

    const fields = [
      { value: this.catalog_name, message: 'Informe o nome do grupo'}
    ]

    if (this.toolsService.validField(fields) == false){
      return;
    }

    if (this.id_catalog != undefined && this.id_catalog != ""){
      dataRequest['id_catalog'] = this.id_catalog;
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

  private loadCompanyCatalogs(id_catalog: string){

    //this.toolsService.showLoading("Buscando grupo ...");

    let dataRequest = {
      id_catalog: id_catalog,
    };

    this.requestService.getRequestById(this.url, 'id',id_catalog).subscribe(async data => {

        if (data['success']) {

          this.id_catalog = data['result'][0]['id_catalog'];
          this.id_company = data['result'][0]['id_company'];
          this.catalog_name = data['result'][0]['catalog_name'];
          this.catalog_status = data['result'][0]['catalog_status'];

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

  private cleanForm() {
    this.catalog_name = "";
  };

}
