import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { SvgComponent } from '../svg/svg.component';

@NgModule({

  declarations: [
    HeaderComponent,
    SvgComponent
  ],

  exports: [
    HeaderComponent,
    SvgComponent
  ],

  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],

})
export class Sharedmodules {}
