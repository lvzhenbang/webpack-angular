import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NgModule,
  NgModuleFactoryLoader,
  SystemJsNgModuleLoader
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';

import { GlobalModule } from './global.module';
import { AdminModule } from './admin.module';

import {
  AppComponent,
  ContactusComponent,
  IndexComponent,
  NewscenterComponent,
  RecruitmentComponent,
  StyleusComponent,
} from '../components/app';

import { AppRoutingModule } from '../routes/app.route';

@NgModule({
  declarations: [
    AppComponent,
    ContactusComponent,
    IndexComponent,
    NewscenterComponent,
    RecruitmentComponent,
    StyleusComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('./ngsw-worker.js'),
    AppRoutingModule,
    GlobalModule,
    AdminModule,
    FormsModule,
  ],
  providers: [ { provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader } ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
