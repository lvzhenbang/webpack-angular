/**
 * directive of carousel
 * by lzb
 */
import {Directive, Input, ElementRef } from '@angular/core';

import Carousel from '../utils/carousel';


@Directive({
  selector: '[appCarousel]',
})

export class CarouselDirective {
  @Input()
  appCarousel: string;

  slide: any;
  config: object = {
    timer: 5000,
    hasIndicators: true,
    autoplay: true,
  };

  constructor(el: ElementRef) {
    setTimeout(() => {
      this.slide = new Carousel(el.nativeElement, this.config);
      this.slide.init();
    }, 0);
  }
}
