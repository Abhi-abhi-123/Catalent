import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WoOrderPageRoutingModule } from './wo-order-routing.module';

import { WoOrderPage } from './wo-order.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WoOrderPageRoutingModule
  ],
  declarations: [WoOrderPage]
})
export class WoOrderPageModule {}
