import { Component, OnInit } from '@angular/core';
import { AuthenticationsService } from '../../services/authentications/authentications.service';
import { ToolsService } from 'src/app/services/tools/tools.service';

@Component({
  selector: 'app-customers-feedback',
  templateUrl: './customers-feedback.page.html',
  styleUrls: ['./customers-feedback.page.scss'],
})
export class CustomersFeedbackPage implements OnInit {

  constructor(
    public toolsService: ToolsService,
    public authService: AuthenticationsService
  ) { }

  ngOnInit() {
    if (!this.authService.getLoginSuccessful()) {
      this.authService.setLogout();
    }
  }

  public registerFeedback(){
    this.toolsService.showToast("Obrigado pelo feedback!");
    this.toolsService.goToPage("/customers-catalogs/");
  }

}
