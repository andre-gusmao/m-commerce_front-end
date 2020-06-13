import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharePageRoutingModule } from './share-routing.module';
import { SharePage } from './share.page';
import { Sharedmodules } from '../sharedmodules/sharedmodules.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharePageRoutingModule,
    Sharedmodules
  ],
  declarations: [SharePage]
})
export class SharePageModule {}
