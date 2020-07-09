import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CompanyOrdersPageRoutingModule } from './company-orders-routing.module';
import { CompanyOrdersPage } from './company-orders.page';
import { Sharedmodules } from '../../modules/sharedmodules/sharedmodules.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompanyOrdersPageRoutingModule,
    Sharedmodules
  ],
  declarations: [CompanyOrdersPage]
})
export class CompanyOrdersPageModule {}
