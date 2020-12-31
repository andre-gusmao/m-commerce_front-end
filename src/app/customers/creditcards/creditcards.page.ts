import { async } from '@angular/core/testing';
import { ICreditCard } from './../../inferfaces/creditCard';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationsService } from '../../services/authentications/authentications.service';
import { ToolsService } from 'src/app/services/tools/tools.service';
import { RequestsService } from '../../services/requests/requests.service';
import { ShoppingBagService } from '../../services/shopping-bag/shopping-bag.service';

@Component({
  selector: 'app-creditcards',
  templateUrl: './creditcards.page.html',
  styleUrls: ['./creditcards.page.scss'],
})
export class CreditcardsPage implements OnInit {
  
  id_credit_card: string;
  id_customer: string;
  card_number: string = "";
  card_printed_name: string = "";
  card_expiration_month: string = "";
  card_expiration_year: string = "";
  card_security_code: string = "";
  card_company: string = "";
  credit_card_label: string = "";
  customer_cpf: string = "";
  listYear: any = [];
  url: string = 'customers/creditcards.php';
  listPage: string = 'creditcards-list';

  constructor(
    private activatedRoute: ActivatedRoute,
    public ShopBagSrc: ShoppingBagService,
    public requestService: RequestsService,
    public toolsService: ToolsService,
    public authService: AuthenticationsService
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.id_credit_card = params['id'];
    });
  }

  ngOnInit() {
    this.createListYear();
  }

  ionViewWillEnter() {
    if (this.authService.getLoginSuccessful()) {
      if ((this.id_credit_card != undefined) && (this.id_credit_card != "")) {
        this.loadCreditCard(this.id_credit_card);
      } else {
        this.cleanForm();
      }
      this.id_customer = this.authService.getProfileID();
    } else {
      this.authService.setLogout();
    }
  }

  private async loadCreditCard(id_credit_card: string) {
    let cardEdit: ICreditCard;
    cardEdit = await this.ShopBagSrc.getCreditCard(id_credit_card);
    this.id_credit_card = cardEdit.id_credit_card;
    this.card_number = cardEdit.card_number;
    this.card_expiration_month = cardEdit.card_expiration_month;
    this.card_expiration_year = cardEdit.card_expiration_year;
    this.card_security_code = cardEdit.card_security_code;
    this.card_printed_name = cardEdit.card_printed_name;
    this.customer_cpf = cardEdit.customer_cpf;
    this.getCreditCardLabel();
  }

  private cleanForm() {
    this.card_number = "";
    this.card_printed_name = "";
    this.card_expiration_month = "";
    this.card_expiration_year = "";
    this.card_security_code = "";
    this.card_company = "";
  };

  private createListYear(){
    let now = new Date();
    let year = now.getFullYear();
    let i = 0;
    for(i = 0; i <= 10; i++){
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

  public async registerCard(){
    let newCreditCard: ICreditCard;
    const fields = [
      { value: this.card_number, message: 'Informe um cartão válido', length: 16},
      { value: this.card_printed_name, message: 'Informe o nome'},
      { value: this.card_expiration_month, message: 'Selecione o mês', length: 2},
      { value: this.card_expiration_year, message: 'Selecione o ano', length: 4},
      { value: this.card_security_code, message: 'Informe o CVV', length: 3},
      { value: this.card_company, message: 'Selecione a bandeira do cartão'}
    ]

    if (this.toolsService.validField(fields) == false){
      return;
    }

    if(this.customer_cpf != "" && this.toolsService.isValidCPF(this.customer_cpf) == false){
      return;
    }

    newCreditCard = {
      id_credit_card: this.id_credit_card,
      card_number: this.card_number,
      card_printed_name: this.card_printed_name,
      card_expiration_month: this.card_expiration_month,
      card_expiration_year: this.card_expiration_year,
      card_security_code: this.card_security_code,
      customer_cpf: this.customer_cpf
    }

    await this.ShopBagSrc.setCreditCard(newCreditCard).then((result) => {
      if(result) {
        this.toolsService.showToast("Cartão gravado com suceso",1000,"success");
        this.toolsService.goToPage(this.listPage);
      } else {
        this.toolsService.showToast("Não foi possível gravar o cartão",1500,"warning");
      }
    });
  }

}
