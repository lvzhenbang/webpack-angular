/**
 * directive of backtop
 * by lzb
 */
import {
  Directive,
  Input,
  ElementRef,
  HostListener,
  Renderer2
} from '@angular/core';

import scrollto from '../utils/scrollto';

@Directive({
  selector: '[appBacktop]',
})

export class BacktopDirective {
  @Input() appBacktop: string;
  showing: boolean;

  constructor(
    public el: ElementRef,
    public render: Renderer2
  ) {
    this.showing = Object.prototype.hasOwnProperty.call(el.nativeElement, 'showing') ? el.nativeElement.showing : false;
    window.addEventListener('scroll', () => this.backScroll());
  }

  backScroll() {
    if (window.pageYOffset > window.outerHeight) {
      if (!this.showing) {
        this.showing = true;
        this.render.setStyle(this.el.nativeElement, 'display', 'block');
      }
    } else {
      this.showing = false;
      this.render.setStyle(this.el.nativeElement, 'display', 'none');
    }
  }

  @HostListener('click') onClick() {
    this.showing = false;
    scrollto(0, this.backScroll());
  }
}

