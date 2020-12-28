import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { OrdersDeliveryPageRoutingModule } from './orders-delivery-routing.module';
import { OrdersDeliveryPage } from './orders-delivery.page';
import { Sharedmodules } from '../../modules/sharedmodules/sharedmodules.component';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrdersDeliveryPageRoutingModule,
    Sharedmodules
  ],
  declarations: [OrdersDeliveryPage],
  providers: [Geolocation]
})
export class OrdersDeliveryPageModule {}
