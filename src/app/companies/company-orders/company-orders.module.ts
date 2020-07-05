import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompanyOrdersPageRoutingModule } from './company-orders-routing.module';

import { CompanyOrdersPage } from './company-orders.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompanyOrdersPageRoutingModule
  ],
  declarations: [CompanyOrdersPage]
})
export class CompanyOrdersPageModule {}
