/**
 * component of header
 * by lzb
 */
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <div class="sj_nav">
    <div class="sj_wrapper">
      <div class="sj_logo">
        <a routerLink="/index">
          <img [src]="logo.img" [alt]="logo.alt" />
        </a>
      </div>
      <div class="sj_navbar">
        <div class="sj_navbar-container">
          <ul class="sj_navbar-box">
            <li routerLinkActive="active">
              <a routerLink="/index">首页</a>
            </li>
            <li *ngFor="let item of nav" routerLinkActive="active">
              <a [routerLink]="item.href">  {{ item.text }} </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  `,
  styleUrls: ['./header.scss'],
})

export class HeaderComponent {
  @Input() logo;
  @Input() nav;

  constructor() { }
}
