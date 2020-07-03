import { Component, OnInit } from '@angular/core';
import { AuthenticationsService } from 'src/app/services/authentications/authentications.service';

@Component({
  selector: 'app-customers-term',
  templateUrl: './customers-term.page.html',
  styleUrls: ['./customers-term.page.scss'],
})
export class CustomersTermPage implements OnInit {

  constructor(
    public authService: AuthenticationsService
  ) { }

  ngOnInit() {}

  ionViewWillEnter() {
    if (!this.authService.getLoginSuccessful()) {
      this.authService.setLogout();
    }
  }

}
