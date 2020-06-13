import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CreditcardsPageRoutingModule } from './creditcards-routing.module';
import { CreditcardsPage } from './creditcards.page';
import { Sharedmodules } from '../../modules/sharedmodules/sharedmodules.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreditcardsPageRoutingModule,
    Sharedmodules
  ],
  declarations: [CreditcardsPage]
})
export class CreditcardsPageModule {}
