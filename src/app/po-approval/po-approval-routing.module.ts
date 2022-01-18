import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PoApprovalPage } from './po-approval.page';

const routes: Routes = [
  {
    path: '',
    component: PoApprovalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PoApprovalPageRoutingModule {}
