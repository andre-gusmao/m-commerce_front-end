import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { RequestsService } from 'src/app/services/requests/requests.service';
import { ToolsService } from 'src/app/services/tools/tools.service';
import { AuthenticationsService } from 'src/app/services/authentications/authentications.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart/shopping-cart.service';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-checkins',
  templateUrl: './checkins.page.html',
  styleUrls: ['./checkins.page.scss'],
})
export class CheckinsPage implements OnInit {

  QRCodeText: string = "";
  tableID: string = "";
  id_company: string = "";
  userName: string = "";
  companyName: string = "";

  constructor(
    public requestService: RequestsService,
    public toolsService: ToolsService,
    public alertCtrl: AlertController,
    public authService: AuthenticationsService,
    public ShopCartSrc: ShoppingCartService,
    private barcodeScanner: BarcodeScanner
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    if (this.authService.getLoginSuccessful()) {      
      this.tableID = this.authService.getTableID();
      this.userName = this.authService.getUserName();
      this.companyName = this.authService.getCompanyName();
    } else {
      this.authService.setLogout();
    }
  }

  public scanQRCode() {
    this.barcodeScanner.scan().then(barcodeData => {
      console.log("success",barcodeData);
      if (this.validCatalog(barcodeData.text) == true) {
        this.authService.setCheckin(barcodeData.text);
        this.toolsService.goToPage('/customers-catalogs');
      } else {
        this.toolsService.showToast("Código inválido");
      }
    }).catch(error => {
      this.toolsService.showToast("Não foi possível fazer checkin",2000,"warning");
      console.log("error",error);
    })
  }

  async enterQRCode() {
    let quiosqueMesa: string;
    const msgPrompt = await this.alertCtrl.create({
      header: 'Informe o codigo do QRCode',
      inputs: [{
        name: 'QRCodeText',
        type: 'text',
        value: 'Q5M12',
        placeholder: 'Digite aqui o codigo'
      }],
      buttons: [{
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        },
        {
          text: 'Ok',
          handler: data => {
            if (this.validCatalog(data.QRCodeText) == true) {
              this.authService.setCheckin(data.QRCodeText);
              this.toolsService.goToPage('/customers-catalogs');
            } else {
              this.toolsService.showToast("Código inválido");
            }
          }
        }
      ]
    });

    await msgPrompt.present();
  }

  public validCatalog(QRCodeText: string): boolean {
    let valid: boolean = true;
    let url: string = "companies/companies.php?id=" + this.id_company + "?checkin=1";
    this.authService.setCompanyID("");
    if (QRCodeText.length > 0) {
      if ((QRCodeText.substr(0, 1).toLocaleUpperCase() != "Q") || (QRCodeText.indexOf('M') == 0) ) {
          valid = false
        }
      } else {
        valid = false;
      }
      this.id_company = QRCodeText.substr(1,QRCodeText.indexOf('M')-1);
      this.requestCompanyName(this.id_company);
      this.authService.setCompanyID(this.id_company);
      return valid;
  }

  private async requestCompanyName(id_company:string = ""){
    let url: string = environment.endpointURL + "companies/companies.php?id=" + id_company + "?checkin=1";
    return await new Promise(res => {
      let companyName: string = "";
      this.requestService.getRequest(url).subscribe( dataRes => {
        if (dataRes['success']) {
          this.authService.setCompanyName(dataRes['companyName']);
        }
      }, error => {
        this.toolsService.showToast("Não foi possível concluir o checkin",2000,"warning");
        console.error(error);
      })
    });
  }

  public checkOut() {
      this.authService.setCheckOut();
  }

}

  /*

  iOS: To add this entry you can use the edit-config tag in the config.xml like this:

  <edit-config target="NSCameraUsageDescription" file="*-Info.plist" mode="merge">
      <string>To scan barcodes</string>
  </edit-config>

  Fonte: https://enappd-apps.gitbook.io/apps/ionic-4-full-app/pro-pack-features/qr-and-barcode-scanning#integrating-scanner-in-ionic-5

  */