import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CheckinsPageRoutingModule } from './checkins-routing.module';
import { CheckinsPage } from './checkins.page';
import { Sharedmodules } from '../../modules/sharedmodules/sharedmodules.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckinsPageRoutingModule,
    Sharedmodules
  ],
  declarations: [CheckinsPage]
})
export class CheckinsPageModule {}
