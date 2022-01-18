import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PoApprovalPageRoutingModule } from './po-approval-routing.module';

import { PoApprovalPage } from './po-approval.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PoApprovalPageRoutingModule
  ],
  declarations: [PoApprovalPage]
})
export class PoApprovalPageModule {}
