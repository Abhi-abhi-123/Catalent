import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OsPoPageRoutingModule } from './os-po-routing.module';

import { OsPoPage } from './os-po.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OsPoPageRoutingModule
  ],
  declarations: [OsPoPage]
})
export class OsPoPageModule {}
