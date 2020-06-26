import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { WorkersListPageRoutingModule } from './workers-list-routing.module';
import { WorkersListPage } from './workers-list.page';
import { Sharedmodules } from '../../modules/sharedmodules/sharedmodules.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkersListPageRoutingModule,
    Sharedmodules
  ],
  declarations: [WorkersListPage]
})
export class WorkersListPageModule {}
