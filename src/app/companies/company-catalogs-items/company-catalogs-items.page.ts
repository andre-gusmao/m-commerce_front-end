import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestsService } from 'src/app/services/requests/requests.service';
import { ToolsService } from 'src/app/services/tools/tools.service';
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
  catalog_item_note: string;
  catalog_name: string = "";
  productList: any = [];
  urlProduct: string = 'companies/products.php';
  url: string = 'companies/catalogsitems.php';
  insertPage: string = 'company-catalogs-items/';
  itemsList: string = 'company-catalogs-items-list/';
  listPage: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    public requestService: RequestsService,
    public toolsService: ToolsService,
    public authService: AuthenticationsService
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.id_catalog = params['id'];
      this.listPage = this.itemsList + this.id_catalog;
      this.catalog_name = this.authService.getCatalogName();
      if(params["cd"] != undefined && params["cd"] != ""){
        this.id_catalog_item = params["cd"];        
      }
    });
  }

  ngOnInit() {}

  ionViewWillEnter() {
    if(this.authService.getLoginSuccessful()) {
      this.id_company = this.authService.getCompanyID();
      this.cleanForm();
      this.loadProducts();
      this.loadCatalogItem();
    } else {
      this.authService.setLogout();
    }
  }

  private async loadCatalogItem(){

    if(this.id_catalog_item != undefined && this.id_catalog_item != ""){

      return new Promise(res => {

        this.requestService.getRequestById(this.url, 'id', this.id_catalog_item).subscribe(async data => {

          this.id_company = data['result'][0]['id_company'];
          this.id_catalog = data['result'][0]['id_catalog'];
          this.id_product = data['result'][0]['id_product'];
          this.catalog_item_status = data['result'][0]['catalog_item_status'];
          this.catalog_item_price = data['result'][0]['catalog_item_price'];
          this.catalog_item_note = data['result'][0]['catalog_item_note'];

        }, error => {
          this.toolsService.showAlert();
        })

      });

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
      catalog_item_note: this.catalog_item_note,
      request_type: '',
    }

    if(this.id_catalog_item != undefined && this.id_catalog_item != ""){
      dataRequest['id_catalog_item'] = this.id_catalog_item;
      dataRequest['request_type'] = 'update';
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
        this.cleanForm();
        this.toolsService.goToPage(this.insertPage + this.id_catalog);
      }else{
        this.toolsService.showToast(dataResponse['message'],2000,'warning');
      }
    });
  
  }

  private cleanForm(): void {
    this.id_product = "";
    this.catalog_item_status = "";
    this.catalog_item_price = 0;
    this.catalog_item_note = "";
  }

  private clearPrice(){
    
  }

}
