import {Component,OnInit} from '@angular/core';
import {AlertController} from '@ionic/angular';
import {AuthenticationsService} from 'src/app/services/authentications/authentications.service';
import {ToolsService} from 'src/app/services/tools/tools.service';
import {RequestsService} from '../../services/requests/requests.service';

@Component({
  selector: 'app-products-categories-list',
  templateUrl: './products-categories-list.page.html',
  styleUrls: ['./products-categories-list.page.scss'],
})
export class ProductsCategoriesListPage implements OnInit {

  listProdCateg: any[];
  id_product_category: string = "";
  id_company: string = "";
  product_category_name: string = "";
  url: string = 'companies/productscategories.php';
  editPage: string = '/products-categories/';
  start: number = 0;
  limit: number = 10;

  constructor(
    public requestService: RequestsService,
    public toolsService: ToolsService,
    public alertCtrl: AlertController,
    public authService: AuthenticationsService
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {    
    if (this.authService.getLoginSuccessful()) {
      this.start = 0;
      this.listProdCateg = [];
      this.id_company = this.authService.getCompanyID();
      this.loadProductsCategories();
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
      this.loadProductsCategories().then(() => {
        event.target.complete();
      });
    }, 500);
  }

  private async loadProductsCategories() {

    return new Promise(res => {

      this.requestService.getRequestById(this.url, 'company', this.id_company).subscribe(dataResponse => {

        for (let prodCateg of dataResponse['result']) {
          this.listProdCateg.push(prodCateg);
        }

      }, error => {
        this.toolsService.showAlert();
      })

    });

  }

  public edit(id_product_category: string): void {
    this.toolsService.goToPage(this.editPage + id_product_category);
  }

  public async delete(id_product_category: string) {

    let dataRequest = {
      id_product_category: id_product_category,
      request_type: 'delete',
    }

    const question = await this.alertCtrl.create({
      header: "Atenção!",
      message: "Confirma exclusão do grupo ?",
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
                window.alert("Grupo excluído");
              } else {
                window.alert("Grupo não foi excluído");
              }
              this.listProdCateg = [];
              this.loadProductsCategories();
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