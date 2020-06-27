import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToolsService } from '../tools/tools.service';
import { MenuService } from '../menu/menu.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationsService {

  profileType: string = "";
  userLogin: string = "";
  userName: string = "";
  companyID: string = "";
  catalogID: string = "";
  profileID: string = "";
  tableID: string = "";
  isLogged: boolean = false;
  isLoading: boolean = false;
  catalogName: string = ""
  appCatalog: any = [];

  constructor(
    private router: Router,
    public menuService: MenuService,
    public toolsService: ToolsService
  ) { }

  setCheckin(QRCodeText: string): void {
    let id_company: string = QRCodeText.substr(1,QRCodeText.indexOf('M')-1);
    let id_table: string = QRCodeText.substr(QRCodeText.indexOf('M')+1);
    this.setCompanyID(id_company);
    this.setTableID(id_table);
  }

  setCheckOut(){
    this.setCompanyID("");
    this.setTableID("");
  }

  loadCatalog(){
    if(this.tableID != "" && this.companyID != ""){
      //LoadCatalogu
    }
  }

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

  getCheckin(): boolean{
    let valid: boolean = true;
    if (this.tableID === ""){
      valid = false;
    }
    return valid;
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

  getTableID(): string {
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
