import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationsService } from '../../services/authentications/authentications.service';
import { ToolsService } from 'src/app/services/tools/tools.service';
import { RequestsService } from '../../services/requests/requests.service';
import { CitiesService } from '../../services/cities/cities.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
})
export class CustomersPage implements OnInit {

  name: string;
  email: string;
  cellPhone: string;
  password: string;
  confirmPassword: string;
  zipCode: string;
  state: string;
  city: string;
  profileID: string;
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;
  passwordIcon: string = 'eye';
  confirmPasswordIcon: string = 'eye';

  constructor(
    private router: Router,
    public requestService: RequestsService,
    public toolsService: ToolsService,
    public citiesService: CitiesService,
    public authService: AuthenticationsService,
    private http: HttpClient
  ) { }

  ngOnInit() {}

  ionViewWillEnter() {
    this.profileID = this.authService.getProfileID();
    if ((this.profileID != undefined) && (this.profileID != "")) {
      this.loadCustomerProfile(this.profileID);
    } else {
      this.cleanForm();
    }
  }

  private cleanForm(): void {
    this.name = "";
    this.email = "";
    this.cellPhone = "";
    this.password = "";
    this.confirmPassword = "";
    this.zipCode = "";
    this.state = "";
    this.city = "";
  }

  private loadCustomerProfile(profileID: string = ""): void {
    this.requestService.getRequestById('customers/customers.php', 'id',profileID).subscribe(async dataRes => {
      if (dataRes['success']) {
        this.name = dataRes['name'];
        this.email = dataRes['email'];
        this.cellPhone = dataRes['cellPhone'];
        this.password = atob(dataRes['password']);
        this.confirmPassword = atob(dataRes['password']);
        this.zipCode = dataRes['zipCode'];
        this.state = dataRes['state'];
        this.city = dataRes['city'];
      } else {
        this.toolsService.showToast(dataRes['message']);
      }
    });
  }

  public registerCustomer(){
    let dataRequest = {
      name: this.name,
      email: btoa(this.email.toLocaleLowerCase()),
      cellPhone: this.cellPhone,
      password: btoa(this.password.toLocaleLowerCase()),
      zipCode: this.zipCode,
      state: this.state,
      city: this.city,
      profileType: '1',
      request_type: '',
    }
    const fields = [
      { value: this.name, message: 'Informe o nome' },
      { value: this.email, message: 'Informe o e-mail' },
      { value: this.cellPhone, message: 'Informe o celular' },
      { value: this.password, message: 'Informe a senha' },
      { value: this.confirmPassword, message: 'Informe confirme a senha' },
      { value: this.zipCode, message: 'Informe o CEP com 8 dígitos', lenght: 8 }
    ];

    if (this.toolsService.validField(fields) == false) {
      return;
    }
    if (this.toolsService.validateEmail(this.email, true) == false) {
      return;
    }
    if (this.toolsService.validatePassword(this.password, true) == false) {
      return;
    }
    if (this.password != this.confirmPassword) {
      this.toolsService.showToast('Senha e Confirme a senha devem ser iguais');
      return;
    }
    if (this.profileID != undefined && this.profileID != "") {//update
      dataRequest['profileID'] = this.profileID;
      dataRequest['request_type'] = 'update';
    }    
    this.requestService.postRequest(dataRequest, 'customers/customers.php').subscribe(async dataResponse => {        
        if (dataResponse['success']) {
          this.profileID = dataResponse['profileID'];
          this.authService.setProfileID(dataResponse['profileID']);
        } 
        this.toolsService.showToast(dataResponse['message']);
        this.toolsService.goToPage('/login');
      }
    );
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
    if(this.zipCode && this.zipCode.length >= 8) {
      this.http.get(url).subscribe( (res) => {
        if(res) {
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
  }

}
