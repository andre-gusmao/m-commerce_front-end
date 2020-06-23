import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CompanyCatalogsListPageRoutingModule } from './company-catalogs-list-routing.module';
import { CompanyCatalogsListPage } from './company-catalogs-list.page';
import { Sharedmodules } from '../../modules/sharedmodules/sharedmodules.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompanyCatalogsListPageRoutingModule,
    Sharedmodules
  ],
  declarations: [CompanyCatalogsListPage]
})
export class CompanyCatalogsListPageModule {}
