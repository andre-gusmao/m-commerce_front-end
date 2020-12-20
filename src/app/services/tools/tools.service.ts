import { Injectable } from '@angular/core';
import { ToastController, LoadingController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToolsService {
  loading = false;

  constructor(
    private loadingCtrl: LoadingController,
    private router: Router,
    public toast: ToastController,
    public alertCtrl: AlertController,
    public platform: Platform
  ) { }

  public goToPage(_page: string){
    this.router.navigate([_page]);
  }

  public userPlatform(): string{
    let platformName: string = "";
    if (this.platform.is("android")) {
      platformName = "android";
    } else if (this.platform.is("ios")) {
      platformName = "ios";
    } else if (this.platform.is("desktop")) {
      platformName = "desktop";
    } else {
      platformName = "another";
    }
    return platformName;
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

  public validField(_fields) {

    let isEmpty = true;

    for (var i in _fields) {
      if (_fields[i].value == undefined || _fields[i].value == "") {
        isEmpty = false;
        this.showToast(_fields[i].message,2000,'warning');
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

  public validateEmail(_email: string, _showToast: boolean = false) {

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

  public validatePassword(_password: string, _showToast: boolean = false) {

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
    })
    .then(alert => {
        alert.present().then(() => {
        if (!this.loading) {
          alert.dismiss(() => { });
        }
      });
    });
  }

  async hideLoading() {
    this.loading = false;
    return await this.loadingCtrl.dismiss().then(() => {
      this.loading = false;
    });
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
        statusText = "Pronto";
        break;
      case "5":
        statusText = "Entregue";
        break;
      case "6":
        statusText = "Cancelado";
        break;
      case "7":
        statusText = "Pagto. Recusado";
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

  public isValidCNPJ(cnpj){
    let isValid: boolean = true;
    let tamanho: number = 0;
    let numeros: string = '';
    let digitos: string = '';
    let soma: number = 0;
    let pos: number = 0;
    let i: number = 0;
    let resultado: number = 0;
    cnpj = cnpj.replace(/[^\d]+/g,'');

    if(cnpj == '') {
      isValid = false;
    }
    
    if (cnpj.length != 14){
      isValid = false;
    }
    
    if (cnpj == "00000000000000" || 
        cnpj == "11111111111111" || 
        cnpj == "22222222222222" || 
        cnpj == "33333333333333" || 
        cnpj == "44444444444444" || 
        cnpj == "55555555555555" || 
        cnpj == "66666666666666" || 
        cnpj == "77777777777777" || 
        cnpj == "88888888888888" || 
        cnpj == "99999999999999") {
        isValid = false;
    }

    tamanho = cnpj.length - 2;
    numeros = cnpj.substring(0,tamanho);
    digitos = cnpj.substring(tamanho);
    soma = 0;
    pos = tamanho - 7;

    for (i = tamanho; i >= 1; i--) {
      soma += Number(numeros.charAt(tamanho - i)) * pos--;
      if (pos < 2) {
        pos = 9;
      }
    }

    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;

    if (resultado != Number(digitos.charAt(0)) ){
      isValid = false;
    }
    
    tamanho = tamanho + 1;
    numeros = cnpj.substring(0,tamanho);
    soma = 0;
    pos = tamanho - 7;

    for (i = tamanho; i >= 1; i--) {
      soma += Number(numeros.charAt(tamanho - i)) * pos--;
      if (pos < 2){
        pos = 9;
      }
    }

    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;

    if (resultado != Number(digitos.charAt(1)) ){
      isValid = false;
    }

    if(!isValid){
      this.showToast("CNPJ informado é inválido");
    }

    return isValid;
  }

  public numericOnly(event): boolean {
    let pattern = /^([0-9])$/;
    let result = pattern.test(event.key);
    return result;
  }

  public formattedPhone(phone: string) {
    let formattedNumber: string = "";
    phone = phone.replace(/[^\d]+/g,'');
    formattedNumber = '(' + phone.substr(0,2) + ') ';
    formattedNumber += phone.substr(2,1) + '.' + phone.substr(3,4);
    formattedNumber += '-' + phone.substr(7,4);
    return formattedNumber;
  }

}
