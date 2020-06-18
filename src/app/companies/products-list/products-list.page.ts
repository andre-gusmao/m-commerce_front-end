import { Component, OnInit } from '@angular/core';
import { RequestsService } from 'src/app/services/requests/requests.service';
import { ToolsService } from 'src/app/services/tools/tools.service';
import { AlertController } from '@ionic/angular';
import { AuthenticationsService } from 'src/app/services/authentications/authentications.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.page.html',
  styleUrls: ['./products-list.page.scss'],
})
export class ProductsListPage implements OnInit {

  productList: any[];
  id_product: string = "";
  id_company: string = "";
  id_product_category: string = "";
  product_name: string = "";
  product_description: string = "";
  product_picture: string = "";
  url: string = 'companies/products.php';
  editPage: string = '/products/';
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
      this.productList = [];
      this.id_company = this.authService.getCompanyID();
      this.loadProducts();
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
      this.loadProducts().then(() => {
        event.target.complete();
      });
    }, 500);
  }

  private loadProducts(){

    return new Promise(res => {

      this.requestService.getRequestById(this.url, 'company', this.id_company).subscribe(dataResponse => {

        for (let product of dataResponse['result']) {
          this.productList.push(product);
        }

      }, error => {
        this.toolsService.showAlert();
      })

    });

  }

  public edit(id_product: string){
    this.toolsService.goToPage(this.editPage + id_product);
  }

  public async delete(id_product){

    const question = await this.alertCtrl.create({
      header: "Atenção!",
      message: "Confirma exclusão do produto ?",
      buttons: [{
          text: "Não",
          role: 'cancel',
          handler: () => {}
        },
        {
          text: "Sim",
          handler: () => {
            this.requestService.deleteRequest(this.url, 'id', id_product).subscribe(dataResponse => {
              if (dataResponse['success']) {
                window.alert("Produto excluído");
              } else {
                window.alert("Produto não foi excluído");
              }
              this.productList = [];
              this.loadProducts();
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
