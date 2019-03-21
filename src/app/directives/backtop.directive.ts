/**
 * directive of backtop
 * by lzb
 */
import { Directive, Input, ElementRef, HostListener } from '@angular/core';

import scrollto from '../utils/scrollto';

@Directive({
  selector: '[appBacktop]',
})

export class BacktopDirective {
  @Input() appBacktop: string;

  showing: boolean;
  constructor(private el: ElementRef) {
    this.showing = Object.prototype.hasOwnProperty.call(el.nativeElement, 'showing') ? el.nativeElement.showing : false;

    window.addEventListener('scroll', () => this.backScroll(el.nativeElement));
  }

  private backScroll(element) {
    if (window.pageYOffset > window.outerHeight) {
      if (!this.showing) {
        this.showing = true;
        this.el.nativeElement.style.display = 'block';
      }
    } else {
      this.showing = false;
      element.style.display = 'none';
    }
  }
}

