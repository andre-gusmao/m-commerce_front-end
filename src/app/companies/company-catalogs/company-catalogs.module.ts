import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CompanyCatalogsPageRoutingModule } from './company-catalogs-routing.module';
import { CompanyCatalogsPage } from './company-catalogs.page';
import { Sharedmodules } from '../../modules/sharedmodules/sharedmodules.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompanyCatalogsPageRoutingModule,
    Sharedmodules
  ],
  declarations: [CompanyCatalogsPage]
})
export class CompanyCatalogsPageModule {}
