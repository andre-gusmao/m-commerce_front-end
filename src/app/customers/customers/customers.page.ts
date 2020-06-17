import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationsService } from '../../services/authentications/authentications.service';
import { ToolsService } from 'src/app/services/tools/tools.service';
import { RequestsService } from '../../services/requests/requests.service';
import { CitiesService } from '../../services/cities/cities.service';
import { isTabSwitch } from '@ionic/angular/directives/navigation/stack-utils';

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
  state: string;
  city: string;
  profileID: string;
  stateList: any = [];
  cityList: any = [];

  constructor(
    private router: Router,
    public requestService: RequestsService,
    public toolsService: ToolsService,
    public citiesService: CitiesService,
    public authService: AuthenticationsService
  ) { }

  ngOnInit() {
    this.stateList = this.citiesService.getStateList();
  }

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
    this.state = "";
    this.city = "";
  }

  private loadCustomerProfile(profileID: string = ""): void {
    this.requestService.getRequestById('customers/customers.php', 'id',profileID).subscribe(async dataRes => {
      if (dataRes['success']) {
        this.name = dataRes['name'];
        this.email = dataRes['email'];
        this.cellPhone = dataRes['cellPhone'];
        this.password = dataRes['password'];
        this.confirmPassword = dataRes['password'];
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
      email: this.email.toLocaleLowerCase(),
      cellPhone: this.cellPhone,
      password: this.password,
      state: this.state,
      city: this.city,
      profileType: '1',
    }

    const fields = [
      { value: this.email, message: 'Informe o e-mail' },
      { value: this.password, message: 'Informe a senha' },
      { value: this.confirmPassword, message: 'Informe confirme a senha' },
      { value: this.name, message: 'Informe o nome' },
      { value: this.cellPhone, message: 'Informe o celular' },
      { value: this.state, message: 'Selecione o estado' },
      { value: this.city, message: 'Selecione a cidade' }
    ]

    if (this.toolsService.emptyField(fields) == false) {
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
    }

    if (this.profileID != undefined && this.profileID != "") {//update
      dataRequest['profileID'] = this.profileID;
    }
    
    this.requestService.postRequest(dataRequest, 'customers/customers.php')
      .subscribe(async dataResponse => {
        
        if (dataResponse['profileID']) {
          this.profileID = dataResponse['profileID'];
          this.authService.setProfileID(dataResponse['profileID']);
        } 
        this.toolsService.showToast(dataResponse['message']);
      
      }
    );

  }

  public loadCities(): void {
    this.toolsService.showLoading('Carregando cidades ...');
    this.city = "";
    if (this.state) {
      this.cityList = [];
      this.cityList = this.citiesService.citiesByState(this.state);
    }
    this.toolsService.hideLoading();
  }

}
