import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CustomersTermPageRoutingModule } from './customers-term-routing.module';
import { CustomersTermPage } from './customers-term.page';
import { Sharedmodules } from '../../modules/sharedmodules/sharedmodules.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomersTermPageRoutingModule,
    Sharedmodules
  ],
  declarations: [CustomersTermPage]
})
export class CustomersTermPageModule {}
