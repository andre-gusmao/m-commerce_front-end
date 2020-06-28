import { Component, OnInit, Input } from '@angular/core';
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
  
  @Input() id_item: string;
  @Input() product_name: string;
  @Input() item_price: number;
  @Input() catalog_note: string;
  @Input() customer_note: string;
  @Input() quantity: number;
  @Input() total_price: number;

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
      if(this.authService.getTableID()){
        this.authService.loadCatalog();
        this.loadCustomerCatalog();
      } else {
        this.toolsService.showToast("Faça checkin para carregar o cardapio");
        this.toolsService.goToPage('checkins');
      }
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
      }, error => {
        this.toolsService.showAlert();
      })

    });

  }

  async showItem(product: any) {

    const itemDetail = await this.modalCtrl.create({
      component: ItemDetailsPage,
      componentProps: {
        id_item: product.id_catalog_item,
        product_name: product.product_name,
        item_price: product.catalog_item_price,
        catalog_note: product.product_description,
        customer_note: "",
        quantity: 1,
        total_price: 1 * product.catalog_item_price
      }
    });

    await itemDetail.present();

    const { data } = await itemDetail.onWillDismiss();
    console.log("data: " + data.id_item);

  }

  private loadGroups(): void {

    let item = [];
    let filGroup = [];
    let group = [];
    let name = ""
    this.appGroups = [];

    for(let i = 0; i < this.appCatalog.length; i++){
      name = this.appCatalog[i].product_category_name;
      if(group.indexOf(name) === -1 ){

        group.push(name);
        item = [];
        item['name'] = name;
        item['items'] = this.appCatalog.filter( (item) => { return item.product_category_name === name; } );
        filGroup.push(item);
      }
    }

    this.appGroups = group;

  }

}
