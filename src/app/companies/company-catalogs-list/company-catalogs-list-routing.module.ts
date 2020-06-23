import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompanyCatalogsListPage } from './company-catalogs-list.page';

const routes: Routes = [
  {
    path: '',
    component: CompanyCatalogsListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanyCatalogsListPageRoutingModule {}
