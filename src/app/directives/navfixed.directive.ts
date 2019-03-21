/**
 * route of navfixed
 * by lzb
 */
import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appNavfixed]',
})

export class NavfixedDirective {
  @Input() appNavfixed: string;

  constructor(
    private el: ElementRef,
  ) {
    // why
    setTimeout(() => this.init(el.nativeElement.children[0]), 0);
    window.addEventListener('scroll', () => this.navShow(el.nativeElement.children[0]));
  }

  private init(element) {
    this.addClass(element, 'sj_nav-fixed');
  }

  private navShow(element) {
    if (!this.hasClass(element, 'sj_nav-show') && window.pageYOffset >= 85) {
      this.addClass(element, 'sj_nav-show');
    }

    if (this.hasClass(element, 'sj_nav-show') && window.pageYOffset < 85) {
      this.removeClass(element, 'sj_nav-show');
    }
  }

  private addClass(element, className) {
    element.classList.add(className);
  }

  private removeClass(element, className) {
    element.classList.remove(className);
  }

  private hasClass(element, className) {
    return element.classList.contains(className);
  }
}
