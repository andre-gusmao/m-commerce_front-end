import { Component, OnInit } from '@angular/core';
import { AuthenticationsService } from '../../services/authentications/authentications.service';
import { RequestsService } from '../../services/requests/requests.service';
import { ToolsService } from 'src/app/services/tools/tools.service';
import { MenuService } from '../../services/menu/menu.service';
import { AlertController } from '@ionic/angular';
import { ShoppingBagService } from 'src/app/services/shopping-bag/shopping-bag.service';
import { IOrder } from '../../inferfaces/order';
import { IOrderItem } from '../../inferfaces/orderItem';

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
  showPassword: boolean = false;
  passwordIcon: string = 'eye';

  constructor(
    public authService: AuthenticationsService,
    public requestService: RequestsService,
    public menuService: MenuService,
    public toolsService: ToolsService,
    public alertController: AlertController,
    public bagService: ShoppingBagService
  ) {}

  ngOnInit() { }
  1
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
        } else {//customers
          this.toolsService.goToPage('/checkins');
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

  recoverPassword() {
    this.toolsService.showToast("Em desenvolvimento");
  }

  public togglePassword(){
    this.showPassword = !this.showPassword;

    if(this.showPassword){
      this.passwordIcon = 'eye-off';
    } else {
      this.passwordIcon = 'eye';
    }
  }

  getOrderA(){
    let ord: IOrder = {
      order_name: "order",
      id_company: 1,
      id_customer: 1,
      order_item_quantity: 0,
      order_total_price: 0,
      order_status: 1,
      order_payment_status: 1,
      order_payment_method: "Cartao Credito",
      id_payment_method: 1
    }
    return ord;
  }

  public insertOrder(){
    let order = this.getOrderA();
    this.bagService.insertOrder(order);
  }

  public deleteOrder(){
    this.bagService.deleteOrder("order");
  }

  public getOrder(){
    this.bagService.getOrder("order");
  }

  getItem1(){
    let item: IOrderItem = {
      order_item_name: "item1",
      id_catalog: 1,
      id_product: 1,
      item_product_name: "Produto 1",
      item_quantity: 2,
      item_unit_price: 10.25,
      item_total_price: 20.50,
      item_note: "Obs1"
    }
    return item;
  }

  getItem2(){
    let item: IOrderItem = {
      order_item_name: "item2",
      id_catalog: 1,
      id_product: 2,
      item_product_name: "Produto 2",
      item_quantity: 2,
      item_unit_price: 20.30,
      item_total_price: 40.60,
      item_note: "Obs2"
    }
    return item;
  }

  public insertItem(){
    let item1 = this.getItem1();
    let item2 = this.getItem2();
    this.bagService.insertItem(item1);
    this.bagService.insertItem(item2);
  }
  
  public deleteItem(){
    this.bagService.deleteItem("item1");
    this.bagService.deleteItem("item2");
  }

  public getItem(){
    this.bagService.getItem("item1");
  }

  public clearStorage(){
    this.bagService.clearStorage();
  }

}
