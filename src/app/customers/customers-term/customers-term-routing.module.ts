import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomersTermPage } from './customers-term.page';

const routes: Routes = [
  {
    path: '',
    component: CustomersTermPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomersTermPageRoutingModule {}
