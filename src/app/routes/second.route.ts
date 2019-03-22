/**
 * block route
 * by lzb
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondComponent } from '../components/commons/second';

const blockRoutes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'investment',
  //   pathMatch: 'full'
  // },
  {
    path: ':type',
    component: SecondComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(blockRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class SecondRoutingModule {}
