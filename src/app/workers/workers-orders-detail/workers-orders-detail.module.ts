import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { WorkersOrdersDetailPageRoutingModule } from './workers-orders-detail-routing.module';
import { WorkersOrdersDetailPage } from './workers-orders-detail.page';
import { Sharedmodules } from '../../modules/sharedmodules/sharedmodules.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Sharedmodules,
    WorkersOrdersDetailPageRoutingModule
  ],
  declarations: [WorkersOrdersDetailPage]
})
export class WorkersOrdersDetailPageModule {}
