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
    path: 'login/:logout',
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
  {
    path: 'checkins',
    loadChildren: () => import('./customers/checkins/checkins.module').then( m => m.CheckinsPageModule)
  },
  {
    path: 'customers-catalogs',
    loadChildren: () => import('./customers/customers-catalogs/customers-catalogs.module').then( m => m.CustomersCatalogsPageModule)
  },
  {
    path: 'item-details',
    loadChildren: () => import('./customers/item-details/item-details.module').then( m => m.ItemDetailsPageModule)
  },
  {
    path: 'logout',
    loadChildren: () => import('./modules/logout/logout.module').then( m => m.LogoutPageModule)
  },
  {
    path: 'shopping-cart',
    loadChildren: () => import('./customers/shopping-cart/shopping-cart.module').then( m => m.ShoppingCartPageModule)
  },
  {
    path: 'customers-term',
    loadChildren: () => import('./customers/customers-term/customers-term.module').then( m => m.CustomersTermPageModule)
  },
  {
    path: 'customers-orders',
    loadChildren: () => import('./customers/customers-orders/customers-orders.module').then( m => m.CustomersOrdersPageModule)
  },
  {
    path: 'customers-orders-detail',
    loadChildren: () => import('./customers/customers-orders-detail/customers-orders-detail.module').then( m => m.CustomersOrdersDetailPageModule)
  },
  {
    path: 'company-orders',
    loadChildren: () => import('./companies/company-orders/company-orders.module').then( m => m.CompanyOrdersPageModule)
  },
  {
    path: 'company-order-details',
    loadChildren: () => import('./companies/company-order-details/company-order-details.module').then( m => m.CompanyOrderDetailsPageModule)
  },
  {
    path: 'company-billing',
    loadChildren: () => import('./companies/company-billing/company-billing.module').then( m => m.CompanyBillingPageModule)
  },
  {
    path: 'company-billing-details',
    loadChildren: () => import('./companies/company-billing-details/company-billing-details.module').then( m => m.CompanyBillingDetailsPageModule)
  },
  {
    path: 'customers-feedback',
    loadChildren: () => import('./customers/customers-feedback/customers-feedback.module').then( m => m.CustomersFeedbackPageModule)
  },
  {
    path: 'payments',
    loadChildren: () => import('./customers/payments/payments.module').then( m => m.PaymentsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
