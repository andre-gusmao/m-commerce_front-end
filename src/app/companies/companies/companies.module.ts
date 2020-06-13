import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CompaniesPageRoutingModule } from './companies-routing.module';
import { CompaniesPage } from './companies.page';
import { Sharedmodules } from '../../modules/sharedmodules/sharedmodules.component';
import { BrMaskerModule } from 'br-mask';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompaniesPageRoutingModule,
    Sharedmodules,
    BrMaskerModule
  ],
  declarations: [CompaniesPage]
})
export class CompaniesPageModule {}
