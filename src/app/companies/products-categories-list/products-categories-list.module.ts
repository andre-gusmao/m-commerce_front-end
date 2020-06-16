import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProductsCategoriesListPageRoutingModule } from './products-categories-list-routing.module';
import { ProductsCategoriesListPage } from './products-categories-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductsCategoriesListPageRoutingModule
  ],
  declarations: [ProductsCategoriesListPage]
})
export class ProductsCategoriesListPageModule {}
