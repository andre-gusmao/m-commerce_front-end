import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CompanyBillingDetailsPageRoutingModule } from './company-billing-details-routing.module';
import { CompanyBillingDetailsPage } from './company-billing-details.page';
import { Sharedmodules } from '../../modules/sharedmodules/sharedmodules.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompanyBillingDetailsPageRoutingModule,
    Sharedmodules
  ],
  declarations: [CompanyBillingDetailsPage]
})
export class CompanyBillingDetailsPageModule {}
