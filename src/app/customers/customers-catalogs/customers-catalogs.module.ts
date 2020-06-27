import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CustomersCatalogsPageRoutingModule } from './customers-catalogs-routing.module';
import { CustomersCatalogsPage } from './customers-catalogs.page';
import { Sharedmodules } from '../../modules/sharedmodules/sharedmodules.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomersCatalogsPageRoutingModule,
    Sharedmodules
  ],
  declarations: [CustomersCatalogsPage]
})
export class CustomersCatalogsPageModule {}
