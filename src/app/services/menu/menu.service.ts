import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  public menu = [];

  public menuD = [
    {
      "title": 'Login',
      "url": '/login',
      "icon": 'person'
    },
    {
      "title": 'Compartilhe',
      "url": '/share',
      "icon": 'share'
    }
  ];

  public menuT = [
    {
      "title": 'Login',
      "url": '/login',
      "icon": 'person'
    },
    {
      "title": 'Perfil',
      "url": '/customers',
      "icon": 'clipboard'
    },
    {
      "title": 'Checkin',
      "url": '/checkin',
      "icon": 'qr-scanner'
    },
    {
      "title": 'Cardapio',
      "url": '/tcardapio',
      "icon": 'list-box'
    },
    {
      "title": 'Pedidos',
      "url": '/tpedido',
      "icon": 'cart'
    },
    {
      "title": 'Cartoes',
      "url": '/creditcards',
      "icon": 'card'
    },
    {
      "title": 'Compartilhe',
      "url": '/share',
      "icon": 'share'
    },
    {
      "title": 'Avaliar APP',
      "url": '/tavaliar',
      "icon": 'thumbs-up'
    },
    {
      "title": 'Termos',
      "url": '/ttermos',
      "icon": 'paper'
    }
  ];

  public menuK = [
    {
      "title": 'Login',
      "url": '/login',
      "icon": 'person',
    },
    {
      "title": 'Quiosque',
      "url": '/qquiosque',
      "icon": 'business'
    },
    {
      "title": 'Grupo de Produtos',
      "url": '/grupo-produtos',
      "icon": 'albums'
    },
    {
      "title": 'Produtos',
      "url": '/qproduto',
      "icon": 'gift'
    },
    {
      "title": 'Cardapio',
      "url": '/qcardapios',
      "icon": 'book'
    },
    {
      "title": 'Entregadores',
      "url": '/qentregadores',
      "icon": 'walk'
    },
    {
      "title": 'Compartilhe',
      "url": '/share',
      "icon": 'share'
    }
  ];

  constructor() { }

  setMenu(menu){

    switch(menu){

      case "D"://default
        this.menu = this.menuD;
      break;

      case "K"://kiosk
        this.menu = this.menuK;
      break;

      case "T"://tourist
        this.menu = this.menuT;
      break;

      default:
        this.menu = this.menuD;
      break;

    }

  }

}
