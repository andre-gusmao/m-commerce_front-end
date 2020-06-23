import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestsService } from 'src/app/services/requests/requests.service';
import { ToolsService } from 'src/app/services/tools/tools.service';
import { AlertController } from '@ionic/angular';
import { AuthenticationsService } from 'src/app/services/authentications/authentications.service';

@Component({
  selector: 'app-company-catalogs-items',
  templateUrl: './company-catalogs-items.page.html',
  styleUrls: ['./company-catalogs-items.page.scss'],
})
export class CompanyCatalogsItemsPage implements OnInit {

  id_catalog_item: string;
  id_company: string;
  id_catalog: string;
  id_product: string;
  catalog_item_status: string;
  catalog_item_price: number;
  catalog_item_note: number;
  productList: any = [];
  urlProduct: string = 'companies/products.php';
  url: string = '';
  listPage: string = 'company-catalogs-items-list';

  constructor(
    private activatedRoute: ActivatedRoute,
    public requestService: RequestsService,
    public toolsService: ToolsService,
    public authService: AuthenticationsService
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.id_catalog_item = params['id'];
    });
  }

  ngOnInit() {}

  ionViewWillEnter() {
    if(this.authService.getLoginSuccessful()) {
      this.id_company = this.authService.getCompanyID();
      this.loadProducts();
    } else {
      this.authService.setLogout();
    }
  }

  private async loadProducts(){

    this.productList = [];

    if (this.id_company != undefined && this.id_company != "") {

      return new Promise(res => {

        this.requestService.getRequestById(this.urlProduct, 'company', this.id_company).subscribe(dataResponse => {

          for (let product of dataResponse['result']) {
            this.productList.push(product);
          }

        }, error => {
          this.toolsService.showAlert();
        })

      });

    }

  }

  async registerCatalogsItems(){

    let dataRequest = {
      id_company: this.id_company,
      id_catalog: this.id_catalog,
      id_product: this.id_product,
      catalog_item_status: this.catalog_item_status,
      catalog_item_price: this.catalog_item_price,
      catalog_item_note: this.catalog_item_note
    }

    const fields = [
      { value: this.id_product, message: 'Selecione um produto'},
      { value: this.catalog_item_status, message: 'Selecione um status'},
      { value: this.catalog_item_price, message: 'Informe um valor'},
    ]

    if (this.toolsService.validField(fields) == false){
      return;
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

}
