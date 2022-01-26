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
  }
  ,
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
  // {
  //   path: 'OC',
  //   loadChildren: () => import('./op-po/op-po.module').then( m => m.OpPoPageModule)
  // },
  // {
  //   path: 'OS',
  //   loadChildren: () => import('./op-po/op-po.module').then( m => m.OpPoPageModule)
  // },
  {
    path: 'order-details',
    loadChildren: () => import('./order-details/order-details.module').then( m => m.OrderDetailsPageModule)
  },
  {
    path: 'work-order-details',
    loadChildren: () => import('./work-order-details/work-order-details.module').then( m => m.WorkOrderDetailsPageModule)
  },
  {
    path: 'addnotes',
    loadChildren: () => import('./addnotes/addnotes.module').then( m => m.AddnotesPageModule)
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
