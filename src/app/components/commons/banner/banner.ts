/**
 * component of banner
 * by lzb
 */
import { Component, Input, ElementRef } from '@angular/core';
import Carousel from '../../../utils/carousel';
import { Renderer2 } from '@angular/core';

@Component({
  selector: 'app-banner',
  template: `
  <div class="banner">
    <div class="carousel">
      <div class="carousel-inner">
        <div
            class="carousel-item"
            *ngFor="let item of banner; index as i"
            [ngClass]="{active: isActive(i)}">
          <a [routerLink]="['../', item.href]">
            <img [src]="item.img" [alt]="item.title">
          </a>
        </div>
      </div>
    </div>
  </div>
  `,
  styleUrls: ['./banner.scss']
})

export class BannerComponent {
  @Input() banner: any;

  slide: any;
  config: object = {
    timer: 5000,
    autoplay: false,
  };

  constructor(
    el: ElementRef,
    render: Renderer2
  ) {
    setTimeout(() => {
      // instance
      this.slide = new Carousel(el.nativeElement.querySelector('.carousel'), this.config);
      // init
      this.slide.init();
      // add indicator
      this.slide.addIndicators(render);
      // add btn of prev/next
      this.slide.addBtnArrow(render);
    }, 0);
  }

  isActive(index) {
    return index === 0;
  }
}
