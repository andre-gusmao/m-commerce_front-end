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
    //this.profileID = this.authService.getProfileID();
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
    this.requestService.getRequestById('customers/customers.php', profileID).subscribe(async dataRes => {
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

  public CadTPerfil(){}

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
