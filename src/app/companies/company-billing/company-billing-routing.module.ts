import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompanyBillingPage } from './company-billing.page';

const routes: Routes = [
  {
    path: '',
    component: CompanyBillingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanyBillingPageRoutingModule {}
