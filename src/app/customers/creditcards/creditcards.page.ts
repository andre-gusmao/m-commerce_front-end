import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationsService } from '../../services/authentications/authentications.service';
import { ToolsService } from 'src/app/services/tools/tools.service';
import { RequestsService } from '../../services/requests/requests.service';

@Component({
  selector: 'app-creditcards',
  templateUrl: './creditcards.page.html',
  styleUrls: ['./creditcards.page.scss'],
})
export class CreditcardsPage implements OnInit {
  
  id_credit_card: string;
  id_customer: string;
  credit_card_number: string;
  credit_card_printed_name: string;
  credit_card_expiration_month: string;
  credit_card_expiration_year: string;
  credit_card_security_code: string;
  credit_card_company: string;
  listYear: any = [];
  url: string = 'customers/creditcards.php';
  listPage: string = 'creditcards-list';

  constructor(
    private activatedRoute: ActivatedRoute,
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

  async registerCreditCard() {

    let dataRequest = {
      id_customer: this.id_customer,
      credit_card_number: this.credit_card_number,
      credit_card_printed_name: this.credit_card_printed_name,
      credit_card_expiration_month: this.credit_card_expiration_month,
      credit_card_expiration_year: this.credit_card_expiration_year,
      credit_card_security_code: this.credit_card_security_code,
      credit_card_company: this.credit_card_company
    }

    const fields = [
      { value: this.credit_card_number, message: 'Informe um cartão válido', length: 16},
      { value: this.credit_card_printed_name, message: 'Informe o nome'},
      { value: this.credit_card_expiration_month, message: 'Selecione o mês', length: 2},
      { value: this.credit_card_expiration_year, message: 'Selecione o ano', length: 4},
      { value: this.credit_card_security_code, message: 'Informe o CVV', length: 3},
      { value: this.credit_card_company, message: 'Selecione a bandeira do cartão'}
    ]

    if (this.toolsService.validField(fields) == false){
      return;
    }

    if (this.id_credit_card != undefined && this.id_credit_card != ""){
      dataRequest['id_credit_card'] = this.id_credit_card;
    }

    this.requestService.postRequest(dataRequest, this.url).subscribe(async dataResponse => {
      if (dataResponse['success']) {
        this.toolsService.showToast(dataResponse['message'],2000,'success');
        this.toolsService.goToPage(this.listPage);
      }else{
        this.toolsService.showToast(dataResponse['message'],2000,'warning');
      }
    });

  }

  private loadCreditCard(id_credit_card: string): void {

    this.toolsService.showLoading("Buscando cartões ...");

    this.requestService.getRequestById(this.url, 'id',id_credit_card).subscribe(async data => {

        if (data['success']) {

          this.id_credit_card = data['result'][0]['id_credit_card'];
          this.id_customer = data['result'][0]['id_customer'];
          this.credit_card_number = data['result'][0]['credit_card_number'];
          this.credit_card_printed_name = data['result'][0]['credit_card_printed_name'];
          this.credit_card_expiration_month = data['result'][0]['credit_card_expiration_month'];
          this.credit_card_expiration_year = data['result'][0]['credit_card_expiration_year'];
          this.credit_card_security_code = data['result'][0]['credit_card_security_code'];
          this.credit_card_company = data['result'][0]['credit_card_company'];

        } else {

          this.toolsService.hideLoading();
          this.toolsService.showToast(data['message'], 2000, 'success');

        }

      }, error => {
        this.toolsService.hideLoading();
        this.toolsService.showAlert();
      }

    );

    this.toolsService.hideLoading();
  }

  private cleanForm() {
    this.credit_card_number = "";
    this.credit_card_printed_name = "";
    this.credit_card_expiration_month = "";
    this.credit_card_expiration_year = "";
    this.credit_card_security_code = "";
    this.credit_card_company = "";
  };

  private createListYear(){
    let now = new Date();
    let year = now.getFullYear();
    let i = 0;
    for(i = 0; i <= 15; i++){
      this.listYear.push(year+i);
    }
  }

}
