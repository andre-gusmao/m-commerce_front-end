import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestsService } from 'src/app/services/requests/requests.service';
import { ToolsService } from 'src/app/services/tools/tools.service';
import { AuthenticationsService } from 'src/app/services/authentications/authentications.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-company-catalogs-items-list',
  templateUrl: './company-catalogs-items-list.page.html',
  styleUrls: ['./company-catalogs-items-list.page.scss'],
})
export class CompanyCatalogsItemsListPage implements OnInit {

  id_catalog: string;
  id_company: string;
  start: number = 0;
  limit: number = 5;
  catalog_name: string = "";
  listCatalogItems: any = [];
  url: string = 'companies/catalogsitems.php';
  urlItemList: string = 'company-catalogs-items-list/';
  editPage: string = "company-catalogs-items/";
  hasItem: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    public requestService: RequestsService,
    public toolsService: ToolsService,
    public alertCtrl: AlertController,
    public authService: AuthenticationsService
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.id_catalog = params['id'];
      this.catalog_name = this.authService.getCatalogName();
    });
  }

  ngOnInit() {}

  ionViewWillEnter() {
    if(this.authService.getLoginSuccessful()) {
      this.start = 0;
      this.listCatalogItems = [];
      this.id_company = this.authService.getCompanyID();
      this.loadListCatalogItems();
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
      this.loadListCatalogItems().then(() => {
        event.target.complete();
      });
    }, 5000);
  }

  private async loadListCatalogItems(){
    this.listCatalogItems = [];
    this.toolsService.showLoading("Carregando items")
    return new Promise(res => {
      this.requestService.getRequestById(this.url, 'catalog', this.id_catalog).subscribe(dataResponse => {
        if(dataResponse['success']) {
          for (let itemCatalog of dataResponse['result']) {
            this.listCatalogItems.push(itemCatalog);
          }
          this.hasItem = true;
        } else {
          this.hasItem = false;
        }
        this.toolsService.hideLoading();
      }, error => {
        this.toolsService.hideLoading().finally(() => {
          this.toolsService.showAlert();
        });
      })
    });  
  }

  public edit(id_catalog_item){
    this.toolsService.goToPage(this.editPage + this.id_catalog + "/" + id_catalog_item)
  }

  public async delete(id_catalog_item){
    let dataRequest = {
      id_catalog_item: id_catalog_item,
      request_type: 'delete',
    }
    const question = await this.alertCtrl.create({
      header: "Atenção!",
      message: "Confirma exclusão do item ?",
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
                window.alert("Item excluído");
              } else {
                window.alert("Item não foi excluído");
              }
              this.listCatalogItems = [];
              this.loadListCatalogItems();
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
    this.toolsService.goToPage(this.editPage + this.id_catalog);
  }

  public async statusItemCardapio(id_catalog_item: string ,catalog_item_status: string){
    let dataRequest = {
      id_catalog_item: id_catalog_item,
      request_type: 'status',
      catalog_item_status: ''
    }
    if(catalog_item_status === 'A'){
      dataRequest.catalog_item_status = 'I';
    } else {
      dataRequest.catalog_item_status = 'A';
    }
    this.requestService.postRequest(dataRequest, this.url).subscribe(async dataResponse => {
      if (dataResponse['success']) {
        this.toolsService.showToast(dataResponse['message'],2000,'success');
        this.listCatalogItems = [];
        this.loadListCatalogItems();
      }else{
        this.toolsService.showToast(dataResponse['message'],2000,'warning');
      }
    });
  }
}
