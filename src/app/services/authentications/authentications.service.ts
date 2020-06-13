import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToolsService } from '../tools/tools.service';
import { MenuService } from '../menu/menu.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationsService {

  profileType = "";
  userLogin = "";
  customerName = "";
  companyID = "";
  catalogID = "";
  profileID = "";
  tableID = "";
  isLogged = false;
  isLoading = false;

  constructor(
    private router: Router,
    public menuService: MenuService,
    public toolsService: ToolsService
  ) { }

  setProfileType(profileType: string) {
    this.profileType = profileType;

    if(profileType.length == 0){
      console.info("%c Logout efetuado","color: green; font-size: 16px;");
    }else{
      console.info("%c Login efetuado","color: green; font-size: 16px;");
    }
  }

  setUserLogin(userLogin: string) {
    this.userLogin = userLogin;
  }

  setCustomerName(customerName: string) {
    this.customerName = customerName;
  }

  setTableID(tableID) {
    this.tableID = tableID;
  }

  setCompanyID(companyID) {
    this.companyID = companyID;
  }

  setCatalogID(catalogID) {
    this.catalogID = catalogID;
  }

  setProfileID(profileID) {
    this.profileID = profileID;
  }

  setLoginSuccessful(isLogged: boolean) {
    this.isLogged = isLogged;
  }

  getProfileType() {
    return this.profileType;
  }

  getUserLogin() {
    return this.userLogin;
  }

  getCustomerName() {
    return this.customerName;
  }

  getCompanyID() {
    return this.companyID;
  }

  getCatalogID() {
    return this.catalogID;
  }

  getTableID() {
    return this.tableID;
  }

  getProfileID() {
    return this.profileID;
  }

  getLoginSuccessful() {
    return this.isLogged;
  }

  async setLogout() {

    this.setProfileType("");
    this.setUserLogin("");
    this.setCustomerName("");
    this.setCompanyID("");
    this.setCatalogID("");
    this.setProfileID("");
    this.setTableID("");
    this.setLoginSuccessful(false);
    this.menuService.setMenu('');
    this.toolsService.showToast('Logout efetuado');
    this.router.navigate(['/login']);

  }
}
