/**
 * module about Second
 * by lzb
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// route
import { GlobalModule } from '../modules/global.module';
import { SecondRoutingModule } from '../routes/second.route';

@NgModule({
  imports: [
    GlobalModule,
    SecondRoutingModule,
    CommonModule,
  ],
  declarations: [],
  exports: [],
  providers: [],
})

export class SecondModule { }
