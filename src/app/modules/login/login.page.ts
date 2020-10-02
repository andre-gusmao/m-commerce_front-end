import { Component, OnInit } from '@angular/core';
import { AuthenticationsService } from '../../services/authentications/authentications.service';
import { RequestsService } from '../../services/requests/requests.service';
import { ToolsService } from 'src/app/services/tools/tools.service';
import { MenuService } from '../../services/menu/menu.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = "";
  password: string = "";
  logado: boolean = false;
  isEmpty: boolean = false;
  showPassword: boolean = false;
  passwordIcon: string = 'eye';

  constructor(
    public authService: AuthenticationsService,
    public requestService: RequestsService,
    public menuService: MenuService,
    public toolsService: ToolsService,
    public alertController: AlertController,
  ) {}

  ngOnInit() { }
  
  async login() {
    let dataRequest = {
      requisicao: 'login',
      email: btoa(this.email.toLocaleLowerCase()),
      password: btoa(this.password.toLocaleLowerCase())
    };
    const fields = [
      { value: this.email, message: 'Informe o e-mail' },
      { value: this.password, message: 'Informe a senha' }
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
    this.requestService.postRequest(dataRequest, 'login.php').subscribe(
      async dataResponse => {
      if (dataResponse['success']) {
        this.authService.setProfileType(dataResponse['profileType']);
        this.authService.setUserLogin(dataResponse['userLogin']);
        this.authService.setUserName(dataResponse['userName']);
        this.authService.setProfileID(dataResponse['profileID']);
        this.menuService.setMenu(dataResponse['profileType']);
        if (dataResponse['profileType'] == '2') {
          this.authService.setCompanyID(dataResponse['profileID']);
        }
        this.authService.setLoginSuccessful(true);
        this.toolsService.showToast('Logado com sucesso');
        if (dataResponse['profileType'] == "2") {//companies
          this.toolsService.goToPage('/company-orders');
        } else if (dataResponse['profileType'] == "3") {//workers
          this.toolsService.goToPage('/workers-orders');
        } else {//customers
          this.toolsService.goToPage('/checkins');
        }
      } else {
        this.toolsService.showToast(dataResponse['message'],2000,"danger");
      }
      this.email = "";
      this.password = "";
    });
  }

  public async registerProfile() {
    const alert = await this.alertController.create({
      header: 'Me conta ...',
      //subHeader: 'Subtitle',
      message: 'Com qual perfil deseja se cadastrar ?',
      buttons: [{
        text: 'Quiosque',
        handler: () => { this.toolsService.goToPage('/companies'); }
      }, {
        text: 'Turista',
        handler: () => { this.toolsService.goToPage('/customers'); }
      }]
    });
    await alert.present();
  }

  public async recoverPassword() {
    let dataRequest = {
      requisicao: 'recover',
      email: btoa(this.email.toLocaleLowerCase())
    }
    if (this.toolsService.validateEmail(this.email, true) == false) {
      return;
    }
    this.requestService.postRequest(dataRequest, 'recover.php').subscribe(
      async dataResponse => {
        console.log(dataRequest)
      if (dataResponse['success']) {
        this.toolsService.showToast(dataResponse['message']);
      } else {
        this.toolsService.showToast(dataResponse['message'],2000,"danger");
      }
      this.email = "";
      this.password = "";
    }, error => {
      console.log(error);
      this.toolsService.showAlert();
      this.toolsService.showToast("Nao foi possivel realizar a operacao",2000,"danger");
    });
  }

  public togglePassword(){
    this.showPassword = !this.showPassword;

    if(this.showPassword){
      this.passwordIcon = 'eye-off';
    } else {
      this.passwordIcon = 'eye';
    }
  }

}