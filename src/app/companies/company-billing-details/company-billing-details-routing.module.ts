import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompanyBillingDetailsPage } from './company-billing-details.page';

const routes: Routes = [
  {
    path: '',
    component: CompanyBillingDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanyBillingDetailsPageRoutingModule {}
