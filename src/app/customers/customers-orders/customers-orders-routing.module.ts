import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomersOrdersPage } from './customers-orders.page';

const routes: Routes = [
  {
    path: '',
    component: CustomersOrdersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomersOrdersPageRoutingModule {}
