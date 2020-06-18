import {  async } from '@angular/core/testing';
import {  Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import {  AuthenticationsService } from '../../services/authentications/authentications.service';
import {  ToolsService } from 'src/app/services/tools/tools.service';
import {  RequestsService } from '../../services/requests/requests.service';
import {  CitiesService } from '../../services/cities/cities.service';

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
  state: string;
  city: string;
  notes: string;
  profileID: string;
  stateList: any = [];
  cityList: any = [];
  dataResponse: any;

  constructor(
    private router: Router,
    public requestService: RequestsService,
    public toolsService: ToolsService,
    public citiesService: CitiesService,
    public authService: AuthenticationsService
  ) {}

  ngOnInit() {
    this.stateList = this.citiesService.getStateList();
  }

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
      email: this.email.toLocaleLowerCase(),
      password: this.password,
      companyName: this.companyName,
      cellPhone: this.cellPhone,
      businessman: this.businessman,
      municipalResgistration: this.municipalResgistration,
      state: this.state,
      city: this.city,
      notes: this.notes,
      profileType: '2',
    }

    const fields = [
      { value: this.email, message: 'Informe o e-mail'      },
      { value: this.password, message: 'Informe a senha'      },
      { value: this.confirmPassword, message: 'Informe confirme a senha'      },
      { value: this.companyName, message: 'Informe o nome fantasia'      },
      { value: this.businessman, message: 'Informe  o nome do proprietario'      },
      { value: this.cellPhone, message: 'Informe o celular'      },
      { value: this.state, message: 'Selecione o estado'      },
      { value: this.city, message: 'Selecione a cidade'      }
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

    if (this.profileID != undefined && this.profileID != "") { //update
      dataRequest['profileID'] = this.profileID;
    }

    this.requestService.postRequest(dataRequest, 'companies/companies.php')
      .subscribe(async dataResponse => {

        if (dataResponse['profileID']) {
          this.profileID = dataResponse['profileID'];
          this.authService.setProfileID(dataResponse['profileID']);
        }
        this.toolsService.showToast(dataResponse['message']);

      });

  }

  private async loadCompanyProfile(profileID: string = "") {

    this.requestService.getRequestById('companies/companies.php', 'id', profileID).subscribe(async dataRes => {
      if (dataRes['success']) {
        this.email = dataRes['email'];
        this.password = dataRes['password'];
        this.confirmPassword = dataRes['password'];
        this.companyName = dataRes['companyName'];
        this.businessman = dataRes['businessman'];
        this.cellPhone = dataRes['cellPhone'];
        this.municipalResgistration = dataRes['municipalResgistration'];
        this.state = dataRes['state'];
        this.city = dataRes['city'];
        this.notes = dataRes['notes'];
      } else {
        this.toolsService.showToast(dataRes['message']);
      }
    });

  }

  private cleanForm(): void {
    this.email = "";
    this.password = "";
    this.confirmPassword = "";
    this.companyName = "";
    this.businessman = "";
    this.cellPhone = "";
    this.municipalResgistration = "";
    this.state = "";
    this.city = "";
    this.notes = "";
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