import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  profileMenu = "";

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    console.log("perfil ngOnInit: " + this.profileMenu);
  }

  ionViewWillEnter(){
    console.log("perfil ionViewWillEnter: " + this.profileMenu);
  }

}
