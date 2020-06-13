import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { MenuComponent } from '../../services/menu/menu.component';

@NgModule({

  declarations: [
    HeaderComponent,
    MenuComponent
  ],

  exports: [
    HeaderComponent,
    MenuComponent
  ],

  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],

})
export class Sharedmodules {}
