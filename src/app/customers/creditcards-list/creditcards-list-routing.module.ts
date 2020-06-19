import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreditcardsListPage } from './creditcards-list.page';

const routes: Routes = [
  {
    path: '',
    component: CreditcardsListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreditcardsListPageRoutingModule {}
