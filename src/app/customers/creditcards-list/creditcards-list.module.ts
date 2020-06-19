import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CreditcardsListPageRoutingModule } from './creditcards-list-routing.module';
import { CreditcardsListPage } from './creditcards-list.page';
import { Sharedmodules } from '../../modules/sharedmodules/sharedmodules.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreditcardsListPageRoutingModule,
    Sharedmodules
  ],
  declarations: [CreditcardsListPage]
})
export class CreditcardsListPageModule {}
