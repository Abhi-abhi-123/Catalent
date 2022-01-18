import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WoOrderPage } from './wo-order.page';

const routes: Routes = [
  {
    path: '',
    component: WoOrderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WoOrderPageRoutingModule {}
