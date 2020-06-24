import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestsService } from 'src/app/services/requests/requests.service';
import { ToolsService } from 'src/app/services/tools/tools.service';
import { AuthenticationsService } from 'src/app/services/authentications/authentications.service';

@Component({
  selector: 'app-company-catalogs-items-list',
  templateUrl: './company-catalogs-items-list.page.html',
  styleUrls: ['./company-catalogs-items-list.page.scss'],
})
export class CompanyCatalogsItemsListPage implements OnInit {
  
  id_catalog: string;
  id_company: string;
  start: number = 0;
  limit: number = 5;
  catalog_name: string = "";
  listCatalogItems: any = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    public requestService: RequestsService,
    public toolsService: ToolsService,
    public authService: AuthenticationsService
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.id_catalog = params['id'];
      this.catalog_name = this.authService.getCatalogName();
    });
  }

  ngOnInit() {}

  ionViewWillEnter() {
    if(this.authService.getLoginSuccessful()) {
      this.id_company = this.authService.getCompanyID();
    } else {
      this.authService.setLogout();
    }
  }

  doRefresh(event) {
    setTimeout(() => {
      this.ionViewWillEnter();
      event.target.complete();
    }, 500);
  }

  loadData(event) {
    this.start += this.limit;
    setTimeout(() => {
      this.loadListCatalogItems().then(() => {
        event.target.complete();
      });
    }, 500);
  }

  loadListCatalogItems(){}

  edit(){}

  delete(){}

  insert(){}

}
