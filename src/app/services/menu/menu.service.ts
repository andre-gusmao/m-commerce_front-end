import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  public menu = [];

  public menu0 = [//admin
    {
      "title": 'Login',
      "url": '/login',
      "icon": 'person-outline'
    },
    {
      "title": 'Compartilhe',
      "url": '/share',
      "icon": 'share-social-outline'
    }
  ];

  public menu1 = [//Customers
    {
      "title": 'Login',
      "url": '/login',
      "icon": 'person-outline'
    },
    {
      "title": 'Perfil',
      "url": '/customers',
      "icon": 'clipboard-outline'
    },
    {
      "title": 'Checkin',
      "url": '/checkins',
      "icon": 'qr-code-outline'
    },
    {
      "title": 'Cardapio',
      "url": '/customers-catalogs',
      "icon": 'book-outline'
    },
    {
      "title": 'Pedidos',
      "url": '/customers-orders',
      "icon": 'cart-outline'
    },
    {
      "title": 'Cartoes',
      "url": '/creditcards-list',
      "icon": 'card-outline'
    },
    {
      "title": 'Compartilhe',
      "url": '/share',
      "icon": 'share-social-outline'
    },
    {
      "title": 'Avaliar APP',
      "url": '/tavaliar',
      "icon": 'thumbs-up-outline'
    },
    {
      "title": 'Termos',
      "url": '/customers-term',
      "icon": 'create-outline'
    },
    {
      "title": 'Sair',
      "url": '/logout',
      "icon": 'log-out-outline'
    }
  ];

  public menu2 = [//companies
    {
      "title": 'Login',
      "url": '/login',
      "icon": 'person-outline',
    },
    {
      "title": 'Pedidos',
      "url": '/company-orders',
      "icon": 'cart-outline'
    },
    {
      "title": 'Faturamento',
      "url": '/company-billing',
      "icon": 'cash-outline'
    },
    {
      "title": 'Quiosque',
      "url": '/companies',
      "icon": 'business-outline'
    },
    {
      "title": 'Grupo de Produtos',
      "url": '/products-categories-list',
      "icon": 'albums-outline'
    },
    {
      "title": 'Produtos',
      "url": '/products-list',
      "icon": 'gift-outline'
    },
    {
      "title": 'Cardapio',
      "url": '/company-catalogs-list',
      "icon": 'book-outline'
    },
    {
      "title": 'Items Cardapio',
      "url": '/company-catalogs-list',
      "icon": 'newspaper-outline'
    },
    {
      "title": 'Entregadores',
      "url": '/workers-list',
      "icon": 'walk-outline'
    },
    {
      "title": 'Compartilhe',
      "url": '/share',
      "icon": 'share-social-outline'
    },
    {
      "title": 'Sair',
      "url": '/logout',
      "icon": 'log-out-outline'
    }
  ];

  public menu3 = [//workers
    {
      "title": 'Login',
      "url": '/login',
      "icon": 'person'
    },
    {
      "title": 'Compartilhe',
      "url": '/share',
      "icon": 'share-social-outline'
    }
  ];

  public menuD = [
    {
      "title": 'Login',
      "url": '/login',
      "icon": 'person-outline'
    },
    {
      "title": 'Compartilhe',
      "url": '/share',
      "icon": 'share-social-outline'
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
