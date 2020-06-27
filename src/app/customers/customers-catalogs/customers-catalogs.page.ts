import { Component, OnInit } from '@angular/core';
import { RequestsService } from 'src/app/services/requests/requests.service';
import { ToolsService } from 'src/app/services/tools/tools.service';
import { AlertController } from '@ionic/angular';
import { AuthenticationsService } from 'src/app/services/authentications/authentications.service';
import { ModalController, NavController } from '@ionic/angular';
import { ItemDetailsPage } from '../item-details/item-details.page';

@Component({
  selector: 'app-customers-catalogs',
  templateUrl: './customers-catalogs.page.html',
  styleUrls: ['./customers-catalogs.page.scss'],
})
export class CustomersCatalogsPage implements OnInit {

  appCatalog: any = [];
  appGroups: any = [];
  id_company: string = "";
  url: string = 'customers/catalogs.php';

  constructor(
    public requestService: RequestsService,
    public toolsService: ToolsService,
    public alertCtrl: AlertController,
    public authService: AuthenticationsService,
    public navCtrl: NavController,
    public modalCtrl: ModalController
  ) { }

  ngOnInit() { }

  ionViewWillEnter() {
    if (this.authService.getLoginSuccessful()) {
      this.id_company = this.authService.getCompanyID();
      this.authService.loadCatalog();
      this.loadCustomerCatalog();
    } else {
      this.appCatalog = [];
      this.authService.setLogout();
    }
  }

  private async loadCustomerCatalog() {

    return new Promise(res => {

      this.requestService.getRequestById(this.url, 'company', this.id_company).subscribe(dataResponse => {

        for (let product of dataResponse['result']) {
          this.appCatalog.push(product);
        }
        this.loadGroups();
        console.log("ok");
      }, error => {
        this.toolsService.showAlert();
      })

    });

  }

  async showItem() {

    const itemDetail = await this.modalCtrl.create({
      component: ItemDetailsPage
    });

    await itemDetail.present();

  }

  loadGroups(){

    let group = [];
    let name = ""

    for(let i = 0; i < this.appCatalog.length; i++){
      name = this.appCatalog[i].product_category_name;
      if(group.indexOf(name) === -1 ){
        group.push(name);
      }
    }

    this.appGroups = group;

  }

}
