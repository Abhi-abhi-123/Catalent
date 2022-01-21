import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OsPoPage } from './os-po.page';

const routes: Routes = [
  {
    path: '',
    component: OsPoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OsPoPageRoutingModule {}
