import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OcPoPage } from './oc-po.page';

const routes: Routes = [
  {
    path: '',
    component: OcPoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OcPoPageRoutingModule {}
