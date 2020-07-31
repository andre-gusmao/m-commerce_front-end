import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestsService } from 'src/app/services/requests/requests.service';
import { ToolsService } from 'src/app/services/tools/tools.service';
import { AuthenticationsService } from 'src/app/services/authentications/authentications.service';

@Component({
  selector: 'app-company-billing-details',
  templateUrl: './company-billing-details.page.html',
  styleUrls: ['./company-billing-details.page.scss'],
})
export class CompanyBillingDetailsPage implements OnInit {

  id_company: string = "";

  constructor(
    private activatedRoute: ActivatedRoute,
    public requestService: RequestsService,
    public toolsService: ToolsService,
    public authService: AuthenticationsService
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.id_company = params['id'];
    });
  }

   ngOnInit() {
     if (this.authService.getLoginSuccessful()) {
        this.id_company = this.id_company;
     } 
   }
 
   ionViewWillEnter() {
     if (this.authService.getLoginSuccessful()) {
       this.id_company = this.id_company;
     } else {
       this.authService.setLogout();
     }
   }

}
