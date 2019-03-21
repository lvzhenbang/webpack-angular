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
  PartnersComponent,
  ProductsComponent,
  SecondComponent,
} from '../components/commons';

// service
import { AuthService } from '../services/auth.service';
import { DataService } from '../services/data.service';
import { LoadingService } from '../services/loading.service';
import { ServiceworkerService } from '../services/serviceworker.service';

// directive
import { BacktopDirective } from '../directives/backtop.directive';
import { CarouselDirective } from '../directives/carousel.directive';
import { MapDirective } from '../directives/map.directive';
import { NavfixedDirective } from '../directives/navfixed.directive';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
  ],
  providers: [
    AuthService,
    DataService,
    LoadingService,
    ServiceworkerService,
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
    PartnersComponent,
    ProductsComponent,
    SecondComponent,
    // directive
    BacktopDirective,
    CarouselDirective,
    MapDirective,
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
    PartnersComponent,
    ProductsComponent,
    SecondComponent,
    // directive
    BacktopDirective,
    CarouselDirective,
    MapDirective,
    NavfixedDirective,
  ],
})

export class GlobalModule { }

declare global {
  interface Window {
    BMap: any;
  }

  interface Title {
    'cn_name': string;
    'en_name': string;
  }
}
