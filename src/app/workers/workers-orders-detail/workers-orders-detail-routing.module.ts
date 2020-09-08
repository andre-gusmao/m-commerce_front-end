import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkersOrdersDetailPage } from './workers-orders-detail.page';

const routes: Routes = [
  {
    path: '',
    component: WorkersOrdersDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkersOrdersDetailPageRoutingModule {}
