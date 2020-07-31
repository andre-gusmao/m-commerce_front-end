import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationsService } from '../../services/authentications/authentications.service';
import { ToolsService } from 'src/app/services/tools/tools.service';
import { RequestsService } from '../../services/requests/requests.service';

@Component({
  selector: 'app-customers-feedback',
  templateUrl: './customers-feedback.page.html',
  styleUrls: ['./customers-feedback.page.scss'],
})
export class CustomersFeedbackPage implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    public requestService: RequestsService,
    public toolsService: ToolsService,
    public authService: AuthenticationsService
  ) { }

  ngOnInit() {}

  ionViewWillEnter() {
    if (this.authService.getLoginSuccessful()) {
      //
    } else {
      this.authService.setLogout();
    }
  }

  public registerFeedback(){}

}
