import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

// commons component
import {
  AboutusComponent,
  BacktopComponent,
  BlocktitleComponent,
  BannerComponent,
  FirstComponent,
  FooterComponent,
  HeaderComponent,
  MapComponent,
  NewslistComponent,
  PartnersComponent,
  ProductsComponent,
  SecondComponent,
} from '../components/commons';

// service
import { AuthService } from '../services/auth.service';
import { DataService } from '../services/data.service';
import { LoadingService } from '../services/loading.service';
import { ServiceworkerService } from '../services/serviceworker.service';

// guards

import { UserLoginGuard } from '../guards/userLoginGuard';

// directive
import { BacktopDirective } from '../directives/backtop.directive';
import { CarouselDirective } from '../directives/carousel.directive';
import { NavfixedDirective } from '../directives/navfixed.directive';

import { BaiduMapModule } from 'angular2-baidu-map';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    BaiduMapModule.forRoot({ak: 'zZ1jDRxcKuPUEX4Ar77rxaLqhk4v6RAj'}),
  ],
  providers: [
    AuthService,
    DataService,
    LoadingService,
    ServiceworkerService,
    UserLoginGuard,
  ],
  declarations: [
    // component
    AboutusComponent,
    BacktopComponent,
    BlocktitleComponent,
    BannerComponent,
    FirstComponent,
    FooterComponent,
    HeaderComponent,
    MapComponent,
    NewslistComponent,
    PartnersComponent,
    ProductsComponent,
    SecondComponent,
    // directive
    BacktopDirective,
    CarouselDirective,
    NavfixedDirective,
  ],
  exports: [
    // component
    AboutusComponent,
    BacktopComponent,
    BlocktitleComponent,
    BannerComponent,
    FirstComponent,
    FooterComponent,
    HeaderComponent,
    MapComponent,
    NewslistComponent,
    PartnersComponent,
    ProductsComponent,
    SecondComponent,
    // directive
    BacktopDirective,
    CarouselDirective,
    NavfixedDirective,
  ],
})

export class GlobalModule { }

declare global {
  interface Title {
    'cn_name': string;
    'en_name': string;
  }
}
