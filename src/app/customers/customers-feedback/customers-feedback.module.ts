import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CustomersFeedbackPageRoutingModule } from './customers-feedback-routing.module';
import { CustomersFeedbackPage } from './customers-feedback.page';
import { Sharedmodules } from '../../modules/sharedmodules/sharedmodules.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomersFeedbackPageRoutingModule,
    Sharedmodules
  ],
  declarations: [CustomersFeedbackPage]
})
export class CustomersFeedbackPageModule {}
