import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OcPoPageRoutingModule } from './oc-po-routing.module';

import { OcPoPage } from './oc-po.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OcPoPageRoutingModule
  ],
  declarations: [OcPoPage]
})
export class OcPoPageModule {}
