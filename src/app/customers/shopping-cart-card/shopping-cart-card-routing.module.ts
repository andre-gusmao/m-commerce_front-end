import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingCartCardPage } from './shopping-cart-card.page';

const routes: Routes = [
  {
    path: '',
    component: ShoppingCartCardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoppingCartCardPageRoutingModule {}
