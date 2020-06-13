import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'share',
    loadChildren: () => import('./modules/share/share.module').then( m => m.SharePageModule)
  },
  {
    path: 'customers',
    loadChildren: () => import('./customers/customers/customers.module').then( m => m.CustomersPageModule)
  },
  {
    path: 'companies',
    loadChildren: () => import('./companies/companies/companies.module').then( m => m.CompaniesPageModule)
  },
  {
    path: 'creditcards',
    loadChildren: () => import('./customers/creditcards/creditcards.module').then( m => m.CreditcardsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }