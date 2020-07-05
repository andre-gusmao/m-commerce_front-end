import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompanyOrderDetailsPage } from './company-order-details.page';

const routes: Routes = [
  {
    path: '',
    component: CompanyOrderDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanyOrderDetailsPageRoutingModule {}
