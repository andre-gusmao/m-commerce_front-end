import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  public menu = [];

  public menu0 = [
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

  public menu1 = [
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

  public menu2 = [//companies
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

  public menu3 = [
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

  constructor() { }

  setMenu(menu){

    switch(menu){

      case "0"://admin
        this.menu = this.menu0;
      break;

      case "1"://customers
        this.menu = this.menu1;
      break;

      case "2"://companies
        this.menu = this.menu2;
      break;

      case "3"://workers
        this.menu = this.menu3;
      break;

      default:
        this.menu = this.menuD;
      break;

    }

  }

}
