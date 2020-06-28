import {
  Component,
  OnInit
} from '@angular/core';
import {
  AlertController
} from '@ionic/angular';
import {
  RequestsService
} from 'src/app/services/requests/requests.service';
import {
  ToolsService
} from 'src/app/services/tools/tools.service';
import {
  AuthenticationsService
} from 'src/app/services/authentications/authentications.service';

@Component({
  selector: 'app-checkins',
  templateUrl: './checkins.page.html',
  styleUrls: ['./checkins.page.scss'],
})
export class CheckinsPage implements OnInit {

  QRCodeText: string = "";
  tableID: string = "";

  constructor(
    public requestService: RequestsService,
    public toolsService: ToolsService,
    public alertCtrl: AlertController,
    public authService: AuthenticationsService
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.tableID = this.authService.getTableID();
    if (!this.authService.getLoginSuccessful()) {
      this.authService.setLogout();
    }
  }

  scanQRCode() {}

  async enterQRCode() {

    let quiosqueMesa: string;

    const msgPrompt = await this.alertCtrl.create({
      header: 'Informe o codigo do QRCode',
      inputs: [{
        name: 'QRCodeText',
        type: 'text',
        value: 'Q1M10',
        placeholder: 'Digite aqui o codigo'
      }],
      buttons: [{
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirma Cancelar');
          }
        },
        {
          text: 'Ok',
          handler: data => {
            console.log('Confirma OK: ' + data.QRCodeText);
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

  validCatalog(QRCodeText: string): boolean {
    let valid: boolean = true;

    if (QRCodeText.length > 0) {

      if ((QRCodeText.substr(0, 1).toLocaleUpperCase() != "Q") || (QRCodeText.indexOf('M') == 0) ) {
          valid = false
        }

      }
      else {
        valid = false;
      }

      return valid;
    }

    checkOut() {
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