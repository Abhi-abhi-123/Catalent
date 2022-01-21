import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpPoPage } from './op-po.page';

const routes: Routes = [
  {
    path: '',
    component: OpPoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpPoPageRoutingModule {}
