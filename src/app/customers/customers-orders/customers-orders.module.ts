import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CustomersOrdersPageRoutingModule } from './customers-orders-routing.module';
import { CustomersOrdersPage } from './customers-orders.page';
import { Sharedmodules } from '../../modules/sharedmodules/sharedmodules.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomersOrdersPageRoutingModule,
    Sharedmodules
  ],
  declarations: [CustomersOrdersPage]
})
export class CustomersOrdersPageModule {}
