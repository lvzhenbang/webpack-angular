/**
 * route of app & children
 * by lzb
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// app & app's child component
import {
  ContactusComponent,
  IndexComponent,
  NewscenterComponent,
  RecruitmentComponent,
  StyleusComponent,
} from '../components/app';

import { FirstComponent } from '../components/commons/first';
import { NewslistComponent } from '../components/commons/newslist';

const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'index',
  },
  {
    path: 'contactus',
    component: ContactusComponent,
  },
  {
    path: 'index',
    component: IndexComponent,
  },
  {
    path: 'newscenter',
    component: NewscenterComponent,
    children: [
      {
        path: ':type',
        component: NewslistComponent
      }
    ]
  },
  {
    path: 'recruitment',
    component: RecruitmentComponent,
  },
  {
    path: 'shzr',
    component: FirstComponent,
    loadChildren: '../modules/second.module#SecondModule'
  },
  {
    path: 'styleus',
    component: StyleusComponent,
  },
  {
    path: 'sxy',
    component: FirstComponent,
    loadChildren: '../modules/second.module#SecondModule'
  },
  {
    path: 'ywbk',
    component: FirstComponent,
    loadChildren: '../modules/second.module#SecondModule'
  },
  {
    path: 'zjsj',
    component: FirstComponent,
    loadChildren: '../modules/second.module#SecondModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        useHash: true,
        enableTracing: true // <-- debugging purposes only
      }
    )
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
