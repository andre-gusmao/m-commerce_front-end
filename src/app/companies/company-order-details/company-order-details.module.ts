import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CompanyOrderDetailsPageRoutingModule } from './company-order-details-routing.module';
import { CompanyOrderDetailsPage } from './company-order-details.page';
import { Sharedmodules } from '../../modules/sharedmodules/sharedmodules.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompanyOrderDetailsPageRoutingModule,
    Sharedmodules
  ],
  declarations: [CompanyOrderDetailsPage]
})
export class CompanyOrderDetailsPageModule {}
