import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { isNotAuthenticatedFunctionalGuard, isAuthenticatedFunctionalGuard } from './auth/guards';

const routes: Routes = [

  {
    path: 'auth',
    canActivate: [isNotAuthenticatedFunctionalGuard],
    loadChildren: ()=> import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'dashboard',
    canActivate: [isAuthenticatedFunctionalGuard],
    loadChildren: ()=> import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: '**',
    redirectTo: 'auth'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
