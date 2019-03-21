/**
 * component of banner
 * by lzb
 */
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  template: `
  <div class="banner">
    <div class="carousel" [appNavfixed]>
      <div class="carousel-inner">
        <div
            class="carousel-item"
            *ngFor="let item of banner"
            [ngClass]="{active: isActive(index)}">
          <a [routerLink]="item.href">
            <img [src]="item.img" [alt]="item.title">
          </a>
        </div>
      </div>
      <div class="carousel-control btn-prev"></div>
      <div class="carousel-control btn-next"></div>
    </div>
  </div>
  `,
  styleUrls: ['./banner.scss']
})

export class BannerComponent {
  @Input() banner: any;

  constructor() { }

  isActive(index) {
    return index === 0;
  }
}
