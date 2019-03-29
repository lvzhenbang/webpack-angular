/**
 * component of footer
 * by lzb
 */
import { Component, Input } from '@angular/core';

import scrollto from '../../../utils/scrollto';

@Component({
  selector: 'app-footer',
  template: `
  <div class="sj_footer">
    <div class="sj_wrapper">
      <div class="sj_map-box">
        <ul class="sj_map-nav">
          <li
            class="sj_map-item sj_arrow-more"
            *ngFor="let item of nav"
            (click)="dropdown($event)">
            <span></span>
            <a
              [routerLink]="item.href"
              class="sj_title"
              [type]="item.type"> {{ item.text }} </a>
            <ul class="sj_map-menu" *ngIf="item.subMap">
              <li *ngFor="let subItem of item.subMap">
                <a
                  [routerLink]="[item.href, subItem.href]"
                  [type]="subItem.type"
                  (click)="scrollspy($event)"> {{ subItem.text }} </a>
              </li>
            </ul>
          </li>
        </ul>
        <!-- user service -->
        <div class="sj_user_service">
          <span>在线客服：{{ service.phone }}</span>
          <span>工作时间：{{ service.worktime }}</span>
        </div>

        <!-- qrcode -->
        <div class="sj_qrcode">
          <img [src]="qrcode.img" [alt]="qrcode.alt">
          <div> {{ qrcode.text }} </div>
        </div>
      </div>
    </div>

    <!-- copyright -->
    <div class="sj_copyright">
      <p>京ICP备15002298号&nbsp;京公网安备11010102001651号</p>
    </div>
  </div>`,
  styleUrls: ['./footer.scss'],
})

export class FooterComponent {
  @Input() nav;
  @Input() qrcode;
  @Input() service;
  showing: object;

  constructor() {
    this.showing = {};
  }

  // dropdown(e) {
  //   let element = e.target;
  //   const tagName = element.tagName.toLowerCase();

  //   element = angular.element(element);
  //   if (tagName === 'a' || tagName === 'span') {
  //     const parent = element.parent();
  //     const ul = parent.find('ul');
  //     const text = element[0].innerText;
  //     if (ul) {
  //       this.showing[text] = !this.showing[text];
  //       if (this.showing[text]) {
  //         ul.css('display', 'block');
  //       } else {
  //         ul.css('display', 'none');
  //       }
  //     }
  //   }

  //   const type = element.attr('type');

  //   this.scrollToTarget(type);
  // }

  // scrollspy(e) {
  //   const element = angular.element(e.target);
  //   const type = element.attr('type');
  //   this.scrollToTarget(type);
  // }

  // scrollToTarget(type) {
  //   if (type) {
  //     const target = document.querySelector('.sj_nav');
  //     this.$scope.$watch('$viewContentLoaded', () => {
  //       scrollto(target.clientHeight);
  //     });
  //   }
  // }
}
