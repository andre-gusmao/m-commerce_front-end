import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ShoppingCartPageRoutingModule } from './shopping-cart-routing.module';
import { ShoppingCartPage } from './shopping-cart.page';
import { Sharedmodules } from '../../modules/sharedmodules/sharedmodules.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShoppingCartPageRoutingModule,
    Sharedmodules
  ],
  declarations: [ShoppingCartPage]
})
export class ShoppingCartPageModule {}
