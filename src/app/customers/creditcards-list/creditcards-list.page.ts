import { ICreditCard } from './../../inferfaces/creditCard';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AuthenticationsService } from 'src/app/services/authentications/authentications.service';
import { ToolsService } from 'src/app/services/tools/tools.service';
import { RequestsService } from '../../services/requests/requests.service';
import { ShoppingBagService } from '../../services/shopping-bag/shopping-bag.service';

@Component({
  selector: 'app-creditcards-list',
  templateUrl: './creditcards-list.page.html',
  styleUrls: ['./creditcards-list.page.scss'],
})
export class CreditcardsListPage implements OnInit {

  cardList: ICreditCard[];
  url: string = 'customers/creditcards.php';
  editPage: string = '/creditcards/';
  hasCard: boolean = false;

  constructor(
    public requestService: RequestsService,
    public toolsService: ToolsService,
    public alertCtrl: AlertController,
    public ShopBagSrc: ShoppingBagService,
    public authService: AuthenticationsService
  ) { }

  ngOnInit() { }

  ionViewWillEnter() {
    if (this.authService.getLoginSuccessful()) {
      this.readCards();
    } else {
      this.authService.setLogout();
    }
  }

  public edit(id_credit_card: string,item): void {
    this.toolsService.goToPage(this.editPage + id_credit_card);
  }

  public async delete(id_credit_card: string){
    await this.ShopBagSrc.remove(id_credit_card);
    this.ionViewWillEnter();
  }

  public insert(){
    this.toolsService.goToPage(this.editPage);
  }

  public async readCards(){
    this.cardList = await this.ShopBagSrc.getListCreditCard("creditCard");
    if(this.cardList.length > 0){
      this.hasCard = true;
    } else {
      this.hasCard = false;
    }
  }

}
