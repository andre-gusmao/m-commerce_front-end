import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompanyCatalogsItemsListPage } from './company-catalogs-items-list.page';

const routes: Routes = [
  {
    path: '',
    component: CompanyCatalogsItemsListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanyCatalogsItemsListPageRoutingModule {}
