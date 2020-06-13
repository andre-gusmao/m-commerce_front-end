import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { AutenticacaoService } from '../../servicos/autenticacao.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  profileMenu = "";

  constructor(
    private router: Router
    //,public authServico: AutenticacaoService
  ) { }

  ngOnInit() {
    
    //this.profileMenu = this.authServico.getPerfil();
    console.log("perfil ngOnInit: " + this.profileMenu);

  }

  ionViewWillEnter(){
    
    //this.profileMenu = this.authServico.getPerfil();
    console.log("perfil ionViewWillEnter: " + this.profileMenu);

  }

}
