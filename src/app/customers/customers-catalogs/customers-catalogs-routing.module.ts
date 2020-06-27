import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomersCatalogsPage } from './customers-catalogs.page';

const routes: Routes = [
  {
    path: '',
    component: CustomersCatalogsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomersCatalogsPageRoutingModule {}
