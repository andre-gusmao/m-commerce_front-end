import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrdersDeliveryPageRoutingModule } from './orders-delivery-routing.module';

import { OrdersDeliveryPage } from './orders-delivery.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrdersDeliveryPageRoutingModule
  ],
  declarations: [OrdersDeliveryPage]
})
export class OrdersDeliveryPageModule {}
