import { Component, OnInit } from '@angular/core';
import {AlertController} from '@ionic/angular';
import {AuthenticationsService} from 'src/app/services/authentications/authentications.service';
import {ToolsService} from 'src/app/services/tools/tools.service';
import {RequestsService} from '../../services/requests/requests.service';

@Component({
  selector: 'app-creditcards-list',
  templateUrl: './creditcards-list.page.html',
  styleUrls: ['./creditcards-list.page.scss'],
})
export class CreditcardsListPage implements OnInit {

  cardList: any[];
  id_credit_card: string;
  id_customer: string;
  url: string = 'customers/creditcards.php';
  editPage: string = '/creditcards/';
  start: number = 0;
  limit: number = 10;
  hasCard: boolean = false;

  constructor(
    public requestService: RequestsService,
    public toolsService: ToolsService,
    public alertCtrl: AlertController,
    public authService: AuthenticationsService
  ) { }

  ngOnInit() { }

  ionViewWillEnter() {    
    if (this.authService.getLoginSuccessful()) {
      this.start = 0;
      this.cardList = [];
      this.id_customer = this.authService.getProfileID();
      this.loadCreditCards();
    } else {
      this.authService.setLogout();
    }
  }

  doRefresh(event) {
    setTimeout(() => {
      this.ionViewWillEnter();
      event.target.complete();
    }, 500);
  }

  loadData(event) {
    this.start += this.limit;
    setTimeout(() => {
      this.loadCreditCards().then(() => {
        event.target.complete();
      });
    }, 500);
  }

  private loadCreditCards(){

    return new Promise(res => {

      this.requestService.getRequestById(this.url, 'customer', this.id_customer).subscribe(dataResponse => {

        if (dataResponse['success']) {

          for (let prodCateg of dataResponse['result']) {
            this.cardList.push(prodCateg);
          }
          this.hasCard = true;

        } else {
          this.hasCard = false;
        }

      }, error => {
        this.toolsService.showAlert();
      })

    });
}

  public edit(id_customer: string): void {
    this.toolsService.goToPage(this.editPage + id_customer);
  }

  public async delete(id_credit_card: string){

    let dataRequest = {
      id_credit_card: id_credit_card,
      request_type: 'delete'
    }

    const question = await this.alertCtrl.create({
      header: "Atenção!",
      message: "Confirma exclusão do cartão ?",
      buttons: [{
          text: "Não",
          role: 'cancel',
          handler: () => {}
        },
        {
          text: "Sim",
          handler: () => {
            this.requestService.postRequest(dataRequest, this.url).subscribe(async dataResponse => {
              if (dataResponse['success']) {
                window.alert("Cartão excluído");
              } else {
                window.alert("Cartão não foi excluído");
              }
              this.cardList = [];
              this.loadCreditCards();
            }, error => {
              this.toolsService.showAlert();
            });
          }
        }
      ]
    })
    question.present();
  }

  public insert(){
    this.toolsService.goToPage(this.editPage);
  }

}
