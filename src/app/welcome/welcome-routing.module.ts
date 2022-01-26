import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { WelcomePage } from './welcome.page';

const routes: Routes = [
  {
    path: '',
    component: WelcomePage
  }
//   ,
//   {
//     path: 'po-approval',
//     loadChildren: () => import('../po-approval/po-approval.module').then( m => m.PoApprovalPageModule)
//   },
//   {
//     path: 'wo-order',
//     loadChildren: () => import('../wo-order/wo-order.module').then( m => m.WoOrderPageModule)
//   },
//   {
//     path: 'OP',
//     loadChildren: () => import('../op-po/op-po.module').then( m => m.OpPoPageModule)
//   },
//   {
//     path: 'OC',
//     loadChildren: () => import('../oc-po/oc-po.module').then( m => m.OcPoPageModule)
//   },
//   {
//     path: 'OS',
//     loadChildren: () => import('../os-po/os-po.module').then( m => m.OsPoPageModule)
//   },
//   {
//     path: 'order-details',
//     loadChildren: () => import('../order-details/order-details.module').then( m => m.OrderDetailsPageModule)
//   },
//   {
//     path: 'work-order-details',
//     loadChildren: () => import('../work-order-details/work-order-details.module').then( m => m.WorkOrderDetailsPageModule)
//   }

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WelcomePageRoutingModule {}
