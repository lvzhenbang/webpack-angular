/**
 * route of admin
 * by lzb
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../components/admin';

const adminRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
];


@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AdminRoutingModule {}
