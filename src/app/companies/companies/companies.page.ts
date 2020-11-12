import { Component, OnInit } from '@angular/core';
import { AuthenticationsService } from '../../services/authentications/authentications.service';
import { ToolsService } from 'src/app/services/tools/tools.service';
import { RequestsService } from '../../services/requests/requests.service';
import { CitiesService } from '../../services/cities/cities.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.page.html',
  styleUrls: ['./companies.page.scss'],
})
export class CompaniesPage implements OnInit {

  email: string;
  password: string;
  confirmPassword: string;
  companyName: string;
  businessman: string;
  cellPhone: string;
  municipalResgistration: string;
  zipCode: string;
  state: string;
  city: string;
  notes: string;
  profileID: string;
  dataResponse: any;
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;
  passwordIcon: string = 'eye';
  confirmPasswordIcon: string = 'eye';
  company_document_type: string = "";
  company_document_number: string = "";

  constructor(
    public requestService: RequestsService,
    public toolsService: ToolsService,
    public citiesService: CitiesService,
    public authService: AuthenticationsService,
    private http: HttpClient
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.profileID = this.authService.getProfileID();
    if ((this.profileID != undefined) && (this.profileID != "")) {
      this.loadCompanyProfile(this.profileID);
    } else {
      this.cleanForm();
    }
  }

  async registerCompany() {
    let dataRequest = {
      email: btoa(this.email.toLocaleLowerCase()),
      password: btoa(this.password.toLocaleLowerCase()),
      companyName: this.companyName,
      cellPhone: this.cellPhone,
      businessman: this.businessman,
      zipCode: this.zipCode,
      state: this.state,
      city: this.city,
      notes: this.notes,
      profileType: '2',
      company_document_type: this.company_document_type,
      company_document_number: this.company_document_number,
      request_type: '',
    }

    const fields = [
      { value: this.email, message: 'Informe o e-mail' },
      { value: this.password, message: 'Informe a senha' },
      { value: this.confirmPassword, message: 'Informe confirme a senha' },
      { value: this.companyName, message: 'Informe o nome fantasia' },
      { value: this.businessman, message: 'Informe  o nome do proprietario' },
      { value: this.cellPhone, message: 'Informe o celular' },
      { value: this.company_document_type, message: 'Selecione o tipo de documento' },
      { value: this.company_document_number, message: 'Informe o documento' },
      { value: this.zipCode, message: 'Informe o CEP com 8 dígitos', lenght: 8 }
    ]

    if (this.toolsService.validField(fields) == false) {
      return;
    }

    if (this.toolsService.validateEmail(this.email, true) == false) {
      return;
    }

    if (this.toolsService.validatePassword(this.password, true) == false) {
      return;
    }

    if(this.company_document_type == "CPF" && this.toolsService.isValidCPF(this.company_document_number) == false){
      return;
    }

    if(this.company_document_type == "CNPJ" && this.toolsService.isValidCNPJ(this.company_document_number) == false){
      return;
    }

    if (this.password != this.confirmPassword) {
      this.toolsService.showToast('Senha e Confirme a senha devem ser iguais',2000,'warning');
      return
    }

    if (this.profileID != undefined && this.profileID != "") {
      dataRequest['profileID'] = this.profileID;
      dataRequest['request_type'] = 'update';
    }

    this.requestService.postRequest(dataRequest, 'companies/companies.php').subscribe(async dataResponse => {
        if (dataResponse['success']) {
          this.profileID = dataResponse['profileID'];
          this.authService.setProfileID(dataResponse['profileID']);
        }
        this.toolsService.showToast(dataResponse['message']);
        this.toolsService.goToPage('/login');
      }
    );
  }

  private async loadCompanyProfile(profileID: string = "") {
    return new Promise(res => {
      this.requestService.getRequestById('companies/companies.php', 'id', profileID).subscribe( dataRes => {
        if (dataRes['success']) {
          this.email = dataRes['email'];
          this.password = atob(dataRes['password']);
          this.confirmPassword = atob(dataRes['password']);
          this.companyName = dataRes['companyName'];
          this.businessman = dataRes['businessman'];
          this.cellPhone = dataRes['cellPhone'];
          this.company_document_type = dataRes['company_document_type'];
          this.company_document_number = dataRes['company_document_number'];
          this.zipCode = dataRes['zipCode'];
          this.state = dataRes['state'];
          this.city = dataRes['city'];
          this.notes = dataRes['notes'];
        } else {
          this.toolsService.showToast(dataRes['message']);
        }
      }, error => {
        this.toolsService.showToast("Não foi possível carregar os dados. Verifique a conexão", 1000, "danger");
      })
    });
  }

  private cleanForm(): void {
    this.email = "";
    this.password = "";
    this.confirmPassword = "";
    this.companyName = "";
    this.businessman = "";
    this.cellPhone = "";
    this.company_document_type = "";
    this.company_document_number = "";
    this.zipCode = "";
    this.state = "";
    this.city = "";
    this.notes = "";
  }

  public togglePassword(){
    this.showPassword = !this.showPassword;

    if(this.showPassword){
      this.passwordIcon = 'eye-off';
    } else {
      this.passwordIcon = 'eye';
    }
  }

  public toggleConfirmPassword(){
    this.showConfirmPassword = !this.showConfirmPassword;

    if(this.showConfirmPassword){
      this.confirmPasswordIcon = 'eye-off';
    } else {
      this.confirmPasswordIcon = 'eye';
    }
  }

  public getAddress(){
    let url: string = "https://viacep.com.br/ws/" + this.zipCode + "/json/";
    this.toolsService.showLoading("Carregando UF e Cidade").then( () => {
      if(this.zipCode && this.zipCode.length >= 8) {
        this.http.get(url).subscribe( (res) => {
          if(res && res['uf']) {
            this.city = res['localidade'];
            this.state = res['uf'];
          } else {
            this.toolsService.showToast("CEP nao encontrado",2000,"warning");
            this.city = "";
            this.state = "";
          }
        });
      } else {
        this.toolsService.showToast("Informe CEP válido de 8 dígitos",2000,"warning");
      }
  })
  .finally(() => {
    this.toolsService.hideLoading();
  })
  }

}