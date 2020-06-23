import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestsService } from 'src/app/services/requests/requests.service';
import { ToolsService } from 'src/app/services/tools/tools.service';
import { AlertController } from '@ionic/angular';
import { AuthenticationsService } from 'src/app/services/authentications/authentications.service';

@Component({
  selector: 'app-company-catalogs-list',
  templateUrl: './company-catalogs-list.page.html',
  styleUrls: ['./company-catalogs-list.page.scss'],
})
export class CompanyCatalogsListPage implements OnInit {

  catalogList: any = [];
  start: number = 0;
  limit: number = 5;
  id_catalog: string = "";
  id_company: string = "";
  catalog_name: string = "";
  catalog_status: string = "";
  url: string = 'companies/companycatalogs.php';
  editPage: string = '/company-catalogs/';

  constructor(
    private activatedRoute: ActivatedRoute,
    public requestService: RequestsService,
    public toolsService: ToolsService,
    public alertCtrl: AlertController,
    public authService: AuthenticationsService
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    if (this.authService.getLoginSuccessful()) {
      this.start = 0;
      this.catalogList = [];
      this.id_company = this.authService.getCompanyID();
      this.loadcompanyCatalogsList();
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
      this.loadcompanyCatalogsList().then(() => {
        event.target.complete();
      });
    }, 500);
  }

  private async loadcompanyCatalogsList() {

    return new Promise(res => {

      this.requestService.getRequestById(this.url, 'company', this.id_company).subscribe(dataResponse => {

        for (let catalog of dataResponse['result']) {
          this.catalogList.push(catalog);
        }

      }, error => {
        this.toolsService.showAlert();
      })

    });
}

  public edit(id_catalog: string) {
    this.toolsService.goToPage(this.editPage + id_catalog);
  }

  public async delete(id_catalog) {

    const question = await this.alertCtrl.create({
      header: "Atenção!",
      message: "Confirma exclusão do cardápio ?",
      buttons: [{
          text: "Não",
          role: 'cancel',
          handler: () => {}
        },
        {
          text: "Sim",
          handler: () => {
            this.requestService.deleteRequest(this.url, 'id', id_catalog).subscribe(dataResponse => {
              if (dataResponse['success']) {
                window.alert("Cardápio excluído");
              } else {
                window.alert("Cardápio não foi excluído");
              }
              this.catalogList = [];
              this.loadcompanyCatalogsList();
            }, error => {
              this.toolsService.showAlert();
            });
          }
        }
      ]
    })
    question.present();
  }

  public insert() {
    this.toolsService.goToPage(this.editPage);
  }

  public activateCatalog(id_catalog): void {

    let dataRequest = {
      id_catalog: id_catalog,
      id_company: this.id_company,
      catalog_status: 'A'
    }

    this.requestService.postRequest(dataRequest, this.url).subscribe(async dataResponse => {
      if (dataResponse['success']) {
        this.catalogList = [];
        this.loadcompanyCatalogsList();
        this.toolsService.showToast(dataResponse['message'],2000,'success');
      }else{
        this.toolsService.showToast(dataResponse['message'],2000,'warning');
      }
    });

  }

  public itemsCatalog(id_catalog){
    this.toolsService.goToPage("/company-catalogs-items/" + id_catalog);
  }

}