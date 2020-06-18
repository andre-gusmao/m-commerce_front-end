import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestsService } from 'src/app/services/requests/requests.service';
import { ToolsService } from 'src/app/services/tools/tools.service';
import { AuthenticationsService } from 'src/app/services/authentications/authentications.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  
  id_product: string = "";
  id_company: string = "";
  id_product_category: string = "";
  categoryList: any = [];
  product_name: string = "";
  product_description: string = "";
  product_picture: string = "";
  url: string = 'companies/products.php';
  urlCategory: string = 'companies/productscategories.php'
  listPage: string = 'products-list';

  constructor(
    private activatedRoute: ActivatedRoute,
    public requestService: RequestsService,
    public toolsService: ToolsService,
    public authService: AuthenticationsService
  ) { 
    this.activatedRoute.params.subscribe(params => {
      this.id_product = params['id'];
    });
  }

  ngOnInit() {
    this.id_company = this.authService.getCompanyID();
    if(this.id_company != undefined && this.id_company != ""){
      this.loadProductCategory(this.id_company);
    }
  }

  ionViewWillEnter() {
    if (this.authService.getLoginSuccessful()) {
      if ((this.id_product != undefined) && (this.id_product != "")) {
        this.loadProduct(this.id_product);
      } else {
        this.cleanForm();
      }
      this.id_company = this.authService.getCompanyID();
      this.categoryList = this.loadProductCategory(this.id_company);
    } else {
      this.authService.setLogout();
    }
  }

  private loadProduct(id_product): void {

    this.toolsService.showLoading("Buscando produto ...");

    let dataRequest = {
      id_product: id_product,
    };

    this.requestService.getRequestById(this.url, 'id',id_product).subscribe(async data => {

        var alert = data['msg'];

        if (data['success']) {

          this.id_product = data['result'][0]['id_product'];
          this.id_company = data['result'][0]['id_company'];
          this.categoryList = this.loadProductCategory(this.id_company);
          this.id_product_category = data['result'][0]['id_product_category'];
          this.product_name = data['result'][0]['product_name'];
          this.product_description = data['result'][0]['product_description'];
          this.product_picture = data['result'][0]['product_picture'];

        } else {

          this.toolsService.hideLoading();
          this.toolsService.showToast(alert, 2000, 'success');

        }

      }, error => {
        this.toolsService.hideLoading();
        this.toolsService.showAlert();
      }

    );

    this.toolsService.hideLoading();
  }

  async registerProduct() {

    let dataRequest = {
      id_company: this.id_company,
      id_product_category: this.id_product_category,
      product_name: this.product_name,
      product_description: this.product_description,
      product_picture: this.product_picture,
    }

    const fields = [
      { value: this.product_name, message: 'Informe o nome'},
      { value: this.product_description, message: 'Informe a descrição'},
      { value: this.id_product_category, message: 'Selecion o grupo'}
    ]

    if (this.toolsService.emptyField(fields) == false){
      return;
    }

    if (this.id_product != undefined && this.id_product != ""){
      dataRequest['id_product'] = this.id_product;
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

  public loadProductCategory(id_company) {

    this.categoryList = [];

    return new Promise(res => {

      this.requestService.getRequestById(this.urlCategory, 'company', this.id_company).subscribe(dataResponse => {

        for (let category of dataResponse['result']) {
          this.categoryList.push(category);
        }

      }, error => {
        this.toolsService.showAlert();
      })

    });

  }

  takePictures(){
    window.alert("Em desenvolvimento");
  }

  private cleanForm(): void {
    this.product_name = "";
    this.product_description = "";
    this.id_product_category = "";
  };

}
