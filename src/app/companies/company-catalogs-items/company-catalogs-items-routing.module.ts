import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompanyCatalogsItemsPage } from './company-catalogs-items.page';

const routes: Routes = [
  {
    path: '',
    component: CompanyCatalogsItemsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanyCatalogsItemsPageRoutingModule {}
