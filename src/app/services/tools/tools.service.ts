import { Injectable } from '@angular/core';
import { ToastController, LoadingController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ToolsService {
  loading = false;

  constructor(
    private loadingCtrl: LoadingController,
    private router: Router,
    public toast: ToastController,
    public alertCtrl: AlertController
  ) { }

  goToPage(_page: string){
    this.router.navigate([_page]);
  }

  async showToast(_message: string, _duration: number = 2000, _cssClass: string = 'success') {

    const toast = await this.toast.create({
      message: _message,
      duration: _duration,
      position: 'bottom',      
      cssClass: _cssClass
    });

    toast.present();

  }

  validField(_fields) {

    let isEmpty = true;

    for (var i in _fields) {
      if (_fields[i].value == undefined || _fields[i].value == "") {
        isEmpty = false;
        this.showToast(_fields[i].message);
        break;
      }
      if (_fields[i].lenght != undefined && _fields[i].lenght != _fields[i].value.toString().length) {
        isEmpty = false;
        this.showToast(_fields[i].message);
        break;
      }
    }

    return isEmpty;

  }

  validateEmail(_email: string, _showToast: boolean = false) {

    let format = new RegExp("[a-zA-Z0-9\\._-]+@[a-zA-Z0-9]+\\.[a-zA-Z]");
    let invalidChars = ["!", "#", "$", "%", "�", "&", "*", "(", ")", "+", "=", "[", "]", "{", "}", "�", "`", "^", "~", "<", ">", ":", ";", "?", "/", "\\", "|", "\"", "'", "�", "�", "�", "�", "�", "�", "�", "�", "�", "�", "�", "�", "�", "�", "�", "�", "�", "�", "�", "�"];
    let isValid = true;
    let nFor = 0;

    isValid = format.test(_email.toLocaleLowerCase());

    if (isValid == true) {

      for (nFor = 0; nFor < invalidChars.length; nFor++) {
        if (_email.indexOf(invalidChars[nFor]) >= 0) {
          isValid = false;
          break;
        }
      }

    }

    if (isValid == false && _showToast == true) {
      this.showToast('Informe um e-mail valido');
    }

    return isValid;

  }

  validatePassword(_password: string, _showToast: boolean = false) {

    let letters = RegExp("[a-zA-Z]");
    let numbers = RegExp("[0-9]");
    let isValid = false;

    if ((_password.length >= 8) && (letters.test(_password) == true) && (numbers.test(_password) == true)) {
      isValid = true;
    } else {
      if (_showToast == true) {
        this.showToast('Senha invalida! Minimo de 8 caracteres com letras e numeros');
      }
    }

    return isValid;

  }

  async showLoading(_message: string = "Carregando ...") {
    this.loading = true;
    return await this.loadingCtrl.create({
      message: _message,
      spinner: 'lines'
    }).then(alert => {
      alert.present().then(() => {
        if (!this.loading) {
          alert.dismiss(() => { });
        }
      });
    });
  }

  async hideLoading() {
    this.loading = false;
    return await this.loadingCtrl.dismiss().then(() => { });
  }

  async showAlert(_header: string = "Atenção", _subHeader: string = "Falha de conexão", _message: string = "Verifique sua conexão com a internet"){
    const alert = this.alertCtrl.create({
      header: _header,
      subHeader: _subHeader,
      message: _message,
      buttons: ['Ok']
    });
  }

  public decodeOrderStatus(status: string = ""){

    let statusText: string = "";

    switch (status){
      case "1":
        statusText = "Aguardando Pagto.";
        break;
      case "2":
        statusText = "Pago";
        break;
      case "3":
        statusText = "Em Produção";
        break;
      case "4":
        statusText = "Entregue";
        break;
      case "5":
        statusText = "Cancelado";
        break;
      default:
        statusText = "Indefinido";
    }
    return statusText;
  }

  public isValidCPF(cpf) {
    let isValid = true;
    let soma = 0;
    let resto = 0;
    cpf = cpf.replace(/[\s.-]*/igm, '');

    if (typeof cpf !== "string") {
      isValid = false;
    }

    if (
        !cpf ||
        cpf.length != 11 ||
        cpf == "00000000000" ||
        cpf == "11111111111" ||
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999" 
    ) {
      isValid = false;
    }

    for (var i = 1; i <= 9; i++) 
        soma = soma + parseInt(cpf.substring(i-1, i)) * (11 - i)
    resto = (soma * 10) % 11
    
    if ((resto == 10) || (resto == 11))  resto = 0
    
    if (resto != parseInt(cpf.substring(9, 10)) ) {
      isValid = false;
    }

    soma = 0
    for (var i = 1; i <= 10; i++) 
        soma = soma + parseInt(cpf.substring(i-1, i)) * (12 - i)
    resto = (soma * 10) % 11
    
    if ((resto == 10) || (resto == 11)) resto = 0
    
    if (resto != parseInt(cpf.substring(10, 11) ) ) {
      isValid = false;
    }

    if(!isValid){
      this.showToast("CPF informado é inválido");
    }

    return isValid
  }

}
