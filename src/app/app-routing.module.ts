import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  // {
  //   path: 'home',
  //   loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  // },

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path:'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'po-approval',
    loadChildren: () => import('./po-approval/po-approval.module').then( m => m.PoApprovalPageModule)
  },
  {
    path: 'wo-order',
    loadChildren: () => import('./wo-order/wo-order.module').then( m => m.WoOrderPageModule)
  },
  {
    path: 'OP',
    loadChildren: () => import('./op-po/op-po.module').then( m => m.OpPoPageModule)
  },
  {
    path: 'OC',
    loadChildren: () => import('./oc-po/oc-po.module').then( m => m.OcPoPageModule)
  },
  {
    path: 'OS',
    loadChildren: () => import('./os-po/os-po.module').then( m => m.OsPoPageModule)
  },
  {
    path: 'order-details',
    loadChildren: () => import('./order-details/order-details.module').then( m => m.OrderDetailsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
