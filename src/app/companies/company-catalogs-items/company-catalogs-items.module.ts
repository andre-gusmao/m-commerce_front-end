import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CompanyCatalogsItemsPageRoutingModule } from './company-catalogs-items-routing.module';
import { CompanyCatalogsItemsPage } from './company-catalogs-items.page';
import { Sharedmodules } from '../../modules/sharedmodules/sharedmodules.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompanyCatalogsItemsPageRoutingModule,
    Sharedmodules
  ],
  declarations: [CompanyCatalogsItemsPage]
})
export class CompanyCatalogsItemsPageModule {}
