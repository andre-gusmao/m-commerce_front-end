import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CustomersOrdersDetailPageRoutingModule } from './customers-orders-detail-routing.module';
import { CustomersOrdersDetailPage } from './customers-orders-detail.page';
import { Sharedmodules } from '../../modules/sharedmodules/sharedmodules.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomersOrdersDetailPageRoutingModule,
    Sharedmodules
  ],
  declarations: [CustomersOrdersDetailPage]
})
export class CustomersOrdersDetailPageModule {}
