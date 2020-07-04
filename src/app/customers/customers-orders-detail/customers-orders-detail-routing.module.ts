import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomersOrdersDetailPage } from './customers-orders-detail.page';

const routes: Routes = [
  {
    path: '',
    component: CustomersOrdersDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomersOrdersDetailPageRoutingModule {}
