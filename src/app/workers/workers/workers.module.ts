import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { WorkersPageRoutingModule } from './workers-routing.module';
import { WorkersPage } from './workers.page';
import { Sharedmodules } from '../../modules/sharedmodules/sharedmodules.component';
import { BrMaskerModule } from 'br-mask';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkersPageRoutingModule,
    Sharedmodules,
    BrMaskerModule
  ],
  declarations: [WorkersPage]
})
export class WorkersPageModule {}
