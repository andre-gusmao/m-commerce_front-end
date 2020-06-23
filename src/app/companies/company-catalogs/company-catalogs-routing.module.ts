import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompanyCatalogsPage } from './company-catalogs.page';

const routes: Routes = [
  {
    path: '',
    component: CompanyCatalogsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanyCatalogsPageRoutingModule {}
