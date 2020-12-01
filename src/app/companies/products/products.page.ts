import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestsService } from 'src/app/services/requests/requests.service';
import { ToolsService } from 'src/app/services/tools/tools.service';
import { AuthenticationsService } from 'src/app/services/authentications/authentications.service';
import { environment } from 'src/environments/environment';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

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
  file: File;
  isMobileDevice: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    public requestService: RequestsService,
    public toolsService: ToolsService,
    public authService: AuthenticationsService,
    private camera: Camera
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.id_product = params['id'];
    });
  }

  ngOnInit() {
    let platform: string = this.toolsService.userPlatform();
    if(platform == "android" || platform == "ios"){
      this.isMobileDevice = true;
    }
  }

  ionViewWillEnter() {
    if (this.authService.getLoginSuccessful()) {
      this.id_company = this.authService.getCompanyID();
      this.loadProductCategory(this.id_company);
      if ((this.id_product != undefined) && (this.id_product != "")) {
        this.loadProduct(this.id_product);
      } else {
        this.cleanForm();
      }
    } else {
      this.authService.setLogout();
    }
  }

  public onFileChange(fileChangeEvent){
    console.log("before onFileChange");
    this.file = fileChangeEvent.target.files[0];
    console.log("after onFileChange");
  }

  private async loadProduct(id_product) {
    let dataRequest = {
      id_product: id_product,
    };
    this.requestService.getRequestById(this.url, 'id', id_product).subscribe(async data => {
        if (data['success']) {
          this.id_product = data['result'][0]['id_product'];
          this.id_company = data['result'][0]['id_company'];
          this.loadProductCategory(this.id_company);
          this.id_product_category = data['result'][0]['id_product_category'];
          this.product_name = data['result'][0]['product_name'];
          this.product_description = data['result'][0]['product_description'];
          this.product_picture = data['result'][0]['product_picture'];
        } else {
          this.toolsService.showToast(data['message'], 2000, 'success');
        }
      }, error => {
        this.toolsService.showAlert();
      }
    );
  }

  public async registerProduct() {
    let dataRequest = {
      id_company: this.id_company,
      id_product_category: this.id_product_category,
      product_name: this.product_name,
      product_description: this.product_description,
      product_picture: this.product_picture,
      request_type: '',
    }
    const fields = [
      { value: this.product_name, message: 'Informe o nome' },
      { value: this.product_description, message: 'Informe a descrição' },
      { value: this.id_product_category, message: 'Selecione o grupo' }
    ]
    if (this.toolsService.validField(fields) == false) {
      return;
    }
    if (this.id_product != undefined && this.id_product != "") {
      dataRequest['id_product'] = this.id_product;
      dataRequest['request_type'] = 'update';
    }
    this.requestService.postRequest(dataRequest, this.url).subscribe(async dataResponse => {
      if (dataResponse['success']) {
        this.toolsService.showToast(dataResponse['message'], 2000, 'success');
        this.toolsService.goToPage(this.listPage);
      } else {
        this.toolsService.showToast(dataResponse['message'], 2000, 'warning');
      }
    });
  }

  private async loadProductCategory(id_company) {
    this.clearCategoryList();
    return await new Promise(res => {
      this.requestService.getRequestById(this.urlCategory, 'company', this.id_company).subscribe(dataResponse => {
        for (let category of dataResponse['result']) {
          this.categoryList.push(category);
        }
      }, error => {
        this.toolsService.showAlert();
      })
    });
  }

  public takePictures() {//this.toolsService.showToast("Em desenvolvimento", 2000, 'warning');
    const options: CameraOptions = {
      quality: 100,
      //destinationType: this.camera.DestinationType.FILE_URI,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
      this.product_picture = 'data:image/jpeg;base64,' + imageData;
      console.info("getPicture ok");
    }, (error) => {
     this.toolsService.showToast("Não foi possível capturar a foto",1000,"warning");
     console.log("error",error);
    });
  }

  public async sendPhoto(){
    let url: string = environment.endpointURL + "companies/photo.php"
    //let url: string = "http://192.168.0.20/api/companies/photo.php";
    let formData = new FormData;
    let fileName: string = this.requestService.getFileName(this.id_company,"product",".png");
    formData.append("request_type","insert");
    formData.append("id_company",this.id_company);
    formData.append("file_name",fileName);
    formData.append("photo",this.file, fileName)
    this.http.post(url,formData).subscribe((response) => {
      console.log(response);
    })
  }

  private cleanForm(): void {
    this.product_name = "";
    this.product_description = "";
    this.id_product_category = "";
  };

  private clearCategoryList(){
    while(this.categoryList.length){
      this.categoryList.pop();
    }
  }

}