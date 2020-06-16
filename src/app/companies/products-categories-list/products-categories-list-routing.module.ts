import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsCategoriesListPage } from './products-categories-list.page';

const routes: Routes = [
  {
    path: '',
    component: ProductsCategoriesListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsCategoriesListPageRoutingModule {}
