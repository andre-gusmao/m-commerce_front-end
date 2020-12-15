import { ToolsService } from './../../services/tools/tools.service';
import { Component, OnInit } from '@angular/core';
import { AuthenticationsService } from 'src/app/services/authentications/authentications.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  constructor(
    public authService: AuthenticationsService,
    private toolsService: ToolsService
  ) {
    this.authService.setLogout();
  }

  ngOnInit() {}

  ionViewWillEnter() {
    this.authService.setLogout(true);
    if(this.toolsService.userPlatform() == "android" || this.toolsService.userPlatform() == "ios"){
      navigator['app'].exitApp();
    }
  }
}
