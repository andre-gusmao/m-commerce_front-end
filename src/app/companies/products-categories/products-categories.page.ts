import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationsService } from '../../services/authentications/authentications.service';
import { ToolsService } from 'src/app/services/tools/tools.service';
import { RequestsService } from '../../services/requests/requests.service';

@Component({
  selector: 'app-products-categories',
  templateUrl: './products-categories.page.html',
  styleUrls: ['./products-categories.page.scss'],
})
export class ProductsCategoriesPage implements OnInit {

  id_product_category: string;
  id_company: string;
  product_category_name: string;
  url: string = 'companies/productscategories.php';
  listPage: string = 'products-categories-list';

  constructor(
    private activatedRoute: ActivatedRoute,
    public requestService: RequestsService,
    public toolsService: ToolsService,
    public authService: AuthenticationsService
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.id_product_category = params['id'];
    });
  }

  ngOnInit() {}

  ionViewWillEnter() {
    if (this.authService.getLoginSuccessful()) {
      if ((this.id_product_category != undefined) && (this.id_product_category != "")) {
        this.loadProductCategory(this.id_product_category);
      } else {
        this.cleanForm();
      }
      this.id_company = this.authService.getCompanyID();
    } else {
      this.authService.setLogout();
    }
  }

  async registerProductCategory(){

    let dataRequest = {
      product_category_name: this.product_category_name,
      id_company: this.id_company
    }

    const fields = [
      { value: this.product_category_name, message: 'Informe o nome do grupo'}
    ]

    if (this.toolsService.emptyField(fields) == false){
      return;
    }

    if (this.id_product_category != undefined && this.id_product_category != ""){
      dataRequest['id_product_category'] = this.id_product_category;
    }

    this.requestService.postRequest(dataRequest, this.url).subscribe(async dataResponse => {
      if (dataResponse['success']) {
        this.toolsService.showToast(dataResponse['message'],2000,'success');
      }else{
        this.toolsService.showToast(dataResponse['message'],2000,'warning');
      }
    });

  }

  private loadProductCategory(id_product_category) {

    this.toolsService.showLoading("Buscando grupo ...");

    let dataRequest = {
      id_product_category: id_product_category,
    };

    this.requestService.getRequestById(this.url, 'id',id_product_category).subscribe(async data => {

        var alert = data['msg'];

        if (data['success']) {

          this.id_product_category = data['result'][0]['id_product_category'];
          this.id_company = data['result'][0]['id_company'];
          this.product_category_name = data['result'][0]['product_category_name'];

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

  private cleanForm() {
    this.id_product_category = "";
    this.product_category_name = "";
  };

}