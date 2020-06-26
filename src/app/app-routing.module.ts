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
  {
    path: 'creditcards/:id',
    loadChildren: () => import('./customers/creditcards/creditcards.module').then( m => m.CreditcardsPageModule)
  },
  {
    path: 'products-categories',
    loadChildren: () => import('./companies/products-categories/products-categories.module').then( m => m.ProductsCategoriesPageModule)
  },
  {
    path: 'products-categories/:id',
    loadChildren: () => import('./companies/products-categories/products-categories.module').then( m => m.ProductsCategoriesPageModule)
  },
  {
    path: 'products-categories-list',
    loadChildren: () => import('./companies/products-categories-list/products-categories-list.module').then( m => m.ProductsCategoriesListPageModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./companies/products/products.module').then( m => m.ProductsPageModule)
  },
  {
    path: 'products/:id',
    loadChildren: () => import('./companies/products/products.module').then( m => m.ProductsPageModule)
  },
  {
    path: 'products-list',
    loadChildren: () => import('./companies/products-list/products-list.module').then( m => m.ProductsListPageModule)
  },
  {
    path: 'creditcards-list',
    loadChildren: () => import('./customers/creditcards-list/creditcards-list.module').then( m => m.CreditcardsListPageModule)
  },
  {
    path: 'company-catalogs',
    loadChildren: () => import('./companies/company-catalogs/company-catalogs.module').then( m => m.CompanyCatalogsPageModule)
  },
  {
    path: 'company-catalogs/:id',
    loadChildren: () => import('./companies/company-catalogs/company-catalogs.module').then( m => m.CompanyCatalogsPageModule)
  },
  {
    path: 'company-catalogs-list',
    loadChildren: () => import('./companies/company-catalogs-list/company-catalogs-list.module').then( m => m.CompanyCatalogsListPageModule)
  },
  {
    path: 'company-catalogs-items',
    loadChildren: () => import('./companies/company-catalogs-items/company-catalogs-items.module').then( m => m.CompanyCatalogsItemsPageModule)
  },
  {
    path: 'company-catalogs-items/:id',
    loadChildren: () => import('./companies/company-catalogs-items/company-catalogs-items.module').then( m => m.CompanyCatalogsItemsPageModule)
  },
  {
    path: 'company-catalogs-items/:id/:cd',
    loadChildren: () => import('./companies/company-catalogs-items/company-catalogs-items.module').then( m => m.CompanyCatalogsItemsPageModule)
  },
  {
    path: 'company-catalogs-items-list/:id',
    loadChildren: () => import('./companies/company-catalogs-items-list/company-catalogs-items-list.module').then( m => m.CompanyCatalogsItemsListPageModule)
  },
  {
    path: 'workers',
    loadChildren: () => import('./workers/workers/workers.module').then( m => m.WorkersPageModule)
  },
  {
    path: 'workers-list',
    loadChildren: () => import('./workers/workers-list/workers-list.module').then( m => m.WorkersListPageModule)
  },
  {
    path: 'workers/:id',
    loadChildren: () => import('./workers/workers/workers.module').then( m => m.WorkersPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
