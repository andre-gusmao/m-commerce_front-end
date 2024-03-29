import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProductsListPageRoutingModule } from './products-list-routing.module';
import { ProductsListPage } from './products-list.page';
import { Sharedmodules } from '../../modules/sharedmodules/sharedmodules.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductsListPageRoutingModule,
    Sharedmodules
  ],
  declarations: [ProductsListPage]
})
export class ProductsListPageModule {}
