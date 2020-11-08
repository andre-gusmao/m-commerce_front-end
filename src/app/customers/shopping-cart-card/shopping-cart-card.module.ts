import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ShoppingCartCardPageRoutingModule } from './shopping-cart-card-routing.module';
import { ShoppingCartCardPage } from './shopping-cart-card.page';
import { Sharedmodules } from '../../modules/sharedmodules/sharedmodules.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShoppingCartCardPageRoutingModule,
    Sharedmodules
  ],
  declarations: [ShoppingCartCardPage]
})
export class ShoppingCartCardPageModule {}
