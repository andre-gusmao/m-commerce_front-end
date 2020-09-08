import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { WorkersOrdersPageRoutingModule } from './workers-orders-routing.module';
import { WorkersOrdersPage } from './workers-orders.page';
import { Sharedmodules } from '../../modules/sharedmodules/sharedmodules.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Sharedmodules,
    WorkersOrdersPageRoutingModule
  ],
  declarations: [WorkersOrdersPage]
})
export class WorkersOrdersPageModule {}
