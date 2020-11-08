import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AuthenticationsService } from 'src/app/services/authentications/authentications.service';
import { ICreditCard } from './../../inferfaces/creditCard';
import { ToolsService } from 'src/app/services/tools/tools.service';

@Component({
  selector: 'app-shopping-cart-card',
  templateUrl: './shopping-cart-card.page.html',
  styleUrls: ['./shopping-cart-card.page.scss'],
})
export class ShoppingCartCardPage implements OnInit {
  
  @Input() card: ICreditCard;
  card_number: string;
  card_expiration_month: string;
  card_expiration_year: string;
  card_security_code: string;
  card_printed_name: string;
  customer_cpf: string;
  card_company: string;
  listYear: any = [];

  constructor(
    public authService: AuthenticationsService,
    public toolsService: ToolsService,
    public modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.createListYear();
  }

  ionViewWillEnter() {
    if (!this.authService.getLoginSuccessful()) {
      this.authService.setLogout();
    }
  }

  private createListYear(){
    let now = new Date();
    let year = now.getFullYear();
    let i = 0;
    for(i = 0; i <= 15; i++){
      this.listYear.push(year+i);
    }
  }

  public getCreditCardLabel(){
  
    var regexVisa = /^4[0-9]{12}(?:[0-9]{3})?/;
    var regexMaster = /^5[1-5][0-9]{14}/;
    var regexAmex = /^3[47][0-9]{13}/;
    var regexDiners = /^3(?:0[0-5]|[68][0-9])[0-9]{11}/;
    var regexDiscover = /^6(?:011|5[0-9]{2})[0-9]{12}/;
    var regexJCB = /^(?:2131|1800|35\d{3})\d{11}/;
    var cardNumber = this.card_number;

    this.card_company = '';
  
    if(regexVisa.test(cardNumber)){
     this.card_company = '1';//Visa
    }
    if(regexMaster.test(cardNumber)){
      this.card_company = '2';//Master
    }
    if(regexAmex.test(cardNumber)){
      this.card_company = '3';//Amex
    }
    if(regexDiners.test(cardNumber)){
      this.card_company = '4';//Diners
    }
    if(regexDiscover.test(cardNumber)){
      this.card_company = '5';//Discover
    }
    if(regexJCB.test(cardNumber)){
      this.card_company = '6';//JCB
    }
  
    if(this.card_company === '') {
      this.card_company = '0';//Outros
    }
  
  }

  public registerCreditCard(){
    const fields = [
      { value: this.card_number, message: 'Informe um cartão válido', length: 16},
      { value: this.card_printed_name, message: 'Informe o nome'},
      { value: this.card_expiration_month, message: 'Selecione o mês', length: 2},
      { value: this.card_expiration_year, message: 'Selecione o ano', length: 4},
      { value: this.card_security_code, message: 'Informe o CVV', length: 3},
      { value: this.card_company, message: 'Selecione a bandeira do cartão'},
      { value: this.customer_cpf, message: 'Informe um CPF válido'}
    ]
    if (this.toolsService.validField(fields) == false){
      return;
    }

    if(this.toolsService.isValidCPF(this.customer_cpf) == false){
      return;
    }

    this.modalCtrl.dismiss({
      'dismissed': true,
      'card_number': this.card_number.toString(),
      'card_expiration_month': this.card_expiration_month,
      'card_expiration_year': this.card_expiration_year,
      'card_security_code': this.card_security_code,
      'card_printed_name': this.card_printed_name,
      'customer_cpf': this.customer_cpf
    });
  }

  public closeCartCard(){
    this.modalCtrl.dismiss().then(
      () => { this.modalCtrl = null }
    );
  }

}
