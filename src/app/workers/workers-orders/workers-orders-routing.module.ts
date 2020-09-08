import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkersOrdersPage } from './workers-orders.page';

const routes: Routes = [
  {
    path: '',
    component: WorkersOrdersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkersOrdersPageRoutingModule {}
