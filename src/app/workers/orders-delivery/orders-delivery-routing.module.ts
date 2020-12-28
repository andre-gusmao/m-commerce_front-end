import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrdersDeliveryPage } from './orders-delivery.page';

const routes: Routes = [
  {
    path: '',
    component: OrdersDeliveryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdersDeliveryPageRoutingModule {}
