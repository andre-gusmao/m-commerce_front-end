import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompanyOrderDetailsPageRoutingModule } from './company-order-details-routing.module';

import { CompanyOrderDetailsPage } from './company-order-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompanyOrderDetailsPageRoutingModule
  ],
  declarations: [CompanyOrderDetailsPage]
})
export class CompanyOrderDetailsPageModule {}
