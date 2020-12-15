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
  product_picture;
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
    this.product_picture = 'data:image/jpeg;base64,' + fileChangeEvent.target.files[0];
    console.log("after onFileChange");
  }

  private async loadProduct(id_product) {
    let dataRequest = {
      id_product: id_product,
    };
    this.toolsService.showLoading("Carregando produto");
    this.requestService.getRequestById(this.url, 'id', id_product).subscribe(async data => {
        if (data['success']) {
          this.id_product = data['result'][0]['id_product'];
          this.id_company = data['result'][0]['id_company'];
          this.toolsService.hideLoading().finally(() => {
            this.loadProductCategory(this.id_company);
          })
          this.id_product_category = data['result'][0]['id_product_category'];
          this.product_name = data['result'][0]['product_name'];
          this.product_description = data['result'][0]['product_description'];
          this.product_picture = data['result'][0]['product_picture'];
        } else {
          this.toolsService.showToast(data['message'], 2000, 'success');
        }
      }, error => {
        this.toolsService.hideLoading().finally(() => {
          this.toolsService.showAlert();
        })
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
    this.toolsService.showLoading("Carregando grupos");
    return await new Promise(res => {
      this.requestService.getRequestById(this.urlCategory, 'company', this.id_company).subscribe(dataResponse => {
        for (let category of dataResponse['result']) {
          this.categoryList.push(category);
        }
      }, error => {
        this.toolsService.hideLoading().finally(() => {
          this.toolsService.showAlert();
        })
      }, () => {
        this.toolsService.hideLoading();
      })
    });
  }

  public takePictures() {
    let resized_picture;
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      allowEdit: true,
      encodingType: this.camera.EncodingType.JPEG,
      targetWidth: 400,
      targetHeight: 400,
      correctOrientation: true,
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

  /*
    CM: L x A = 15,87 x 10,58
    PX: L x A = 600 x 400
    Resolução Máxima 100 DPI
  */
  public compressImage(source, newWidth: number = 600, newHeigth: number = 400){
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = source;
      img.onload = () => {
        const elem = document.createElement('canvas');
        elem.width = newWidth;
        elem.height = newHeigth;
        const ctx = elem.getContext('2d');
        ctx.drawImage(img,0,0,newWidth,newHeigth);
        const data = ctx.canvas.toDataURL();
        resolve(data);
      }
      img.onerror = error => reject(error);
    })
  }

  public comprimir(){
    let resized_picture;
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.compressImage(this.product_picture)
      .then(compressed => {
        resized_picture = compressed;
        console.log("sucsess compressImage");
      })
      .catch( error => {
        console.log(error);
      })
    this.product_picture = resized_picture;
  }

  public savendPhoto(){
    let fileName: string = this.requestService.getFileName(this.id_company,"product",".png");
    let url: string = environment.endpointURL + "companies/photo.php";
    let dataReq = {
      request_type: "insert",
      id_company: this.id_company,
      file_name: fileName,
      photo: this.product_picture
    }
    this.http.post(url,dataReq).subscribe((response) => {
      console.info(response);
    }, error => (
      console.log(error)
    ))
  }

  public async sendPhoto(){
    let url: string = environment.endpointURL + "companies/photo.php"
    let formData = new FormData;
    let fileName: string = this.requestService.getFileName(this.id_company,"product",".png");
    formData.append("request_type","insert");
    formData.append("id_company",this.id_company);
    formData.append("file_name",fileName);
    formData.append("photo",this.product_picture, fileName)
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