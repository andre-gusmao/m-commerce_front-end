import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CompanyCatalogsItemsListPageRoutingModule } from './company-catalogs-items-list-routing.module';
import { CompanyCatalogsItemsListPage } from './company-catalogs-items-list.page';
import { Sharedmodules } from '../../modules/sharedmodules/sharedmodules.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompanyCatalogsItemsListPageRoutingModule,
    Sharedmodules
  ],
  declarations: [CompanyCatalogsItemsListPage]
})
export class CompanyCatalogsItemsListPageModule {}
