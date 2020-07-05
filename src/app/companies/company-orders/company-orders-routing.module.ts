import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompanyOrdersPage } from './company-orders.page';

const routes: Routes = [
  {
    path: '',
    component: CompanyOrdersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanyOrdersPageRoutingModule {}
