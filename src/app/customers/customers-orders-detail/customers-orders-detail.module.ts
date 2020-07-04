import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomersOrdersDetailPageRoutingModule } from './customers-orders-detail-routing.module';

import { CustomersOrdersDetailPage } from './customers-orders-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomersOrdersDetailPageRoutingModule
  ],
  declarations: [CustomersOrdersDetailPage]
})
export class CustomersOrdersDetailPageModule {}
