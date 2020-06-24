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
  userName = "";
  companyID = "";
  catalogID = "";
  profileID = "";
  tableID = "";
  isLogged = false;
  isLoading = false;
  catalogName = ""

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

  setUserName(userName: string) {
    this.userName = userName;
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

  setCatalogName(catalogName: string): void {
    this.catalogName = catalogName;
  }

  getProfileType() {
    return this.profileType;
  }

  getUserName() {
    return this.userName;
  }

  getUserLogin() {
    return this.userLogin;
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

  getLoginSuccessful(): boolean {
    return this.isLogged;
  }

  getCatalogName(){
    return this.catalogName;
  }

  async setLogout() {

    this.setProfileType("");
    this.setUserLogin("");
    this.setUserName("");
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
