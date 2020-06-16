import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProductsCategoriesPageRoutingModule } from './products-categories-routing.module';
import { ProductsCategoriesPage } from './products-categories.page';
import { Sharedmodules } from '../../modules/sharedmodules/sharedmodules.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductsCategoriesPageRoutingModule,
    Sharedmodules
  ],
  declarations: [ProductsCategoriesPage]
})
export class ProductsCategoriesPageModule {}
