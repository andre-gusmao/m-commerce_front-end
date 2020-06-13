import { async } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  email: string;
  password: string;
  logado: boolean = false;
  isEmpty: boolean = false;

  constructor(
    private router: Router,
    public authService: AuthenticationsService,
    public requestService: RequestsService,
    public menuService: MenuService,
    public toolsService: ToolsService,
    public alertController: AlertController
  ) { }

  ngOnInit() { }

  ionViewWillEnter() {
    //PERFIL QUIOSQUE
    //this.email = 'quiosque@kw.com';
    //this.password = 'quio2020';
    //PERFIL TURISTA
    this.email = 'turistas@kw.com';
    this.password = 'turi2020';

  }

  async login() {

    let dataRequest = {
      requisicao: 'login',
      usuario: this.email,
      senha: this.password
    };

    const fields = [
      { value: this.email, message: 'Informe o e-mail' },
      { value: this.password, message: 'Informe a senha' }
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

    this.requestService.postRequest(dataRequest, 'login.php')
      .subscribe(async dataResponse => {

      if (dataResponse['success']) {

        this.authService.setProfileType(dataResponse['profileType']);
        this.authService.setUserLogin(dataResponse['userLogin']);
        this.authService.setCustomerName(dataResponse['customerName']);
        this.authService.setProfileID(dataResponse['profileID']);
        this.menuService.setMenu(dataResponse['profileType']);
        if (dataResponse['profileType'] == 'K') {
          this.authService.setCompanyID(dataResponse['profileID']);
        }
        this.authService.setLoginSuccessful(true);
        this.toolsService.showToast('Logado com sucesso');
        if (dataResponse['profileType'] == "K") {
          this.router.navigate(['/companies']);
        } else {
          this.router.navigate(['/customers']);
        }

      } else {
        this.toolsService.showToast(dataResponse['message']);
      }

      this.email = "";
      this.password = "";

    });

  }

  async registerProfile() {

    const alert = await this.alertController.create({
      header: 'Me conta ...',
      //subHeader: 'Subtitle',
      message: 'Com qual perfil deseja se cadeastrar ?',
      buttons: [{
        text: 'Quiosque',
        handler: () => { this.router.navigate(['/companies']); }
      }, {
        text: 'Turista',
        handler: () => { this.router.navigate(['/customers']); }
      }]
    });

    await alert.present();

  }

  recoverPassword() {
    this.toolsService.showToast("Em desenvolvimento");
  }

}