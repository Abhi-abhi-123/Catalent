import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpPoPageRoutingModule } from './op-po-routing.module';

import { OpPoPage } from './op-po.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpPoPageRoutingModule
  ],
  declarations: [OpPoPage]
})
export class OpPoPageModule {}
