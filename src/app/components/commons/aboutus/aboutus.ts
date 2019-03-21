/**
 * component of aboutus
 * by lzb
 */
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  template: `
  <div class="about-us sj_wrapper">
    <app-blocktitle [title]="aboutus.title"></app-blocktitle>

    <div class="about-list">
      <div class="about-item" *ngFor="let item of aboutus.list">
        <div class="icon"></div>
        <div class="desc"> {{ item.desc }} </div>
      </div>
    </div>
  </div>
  `,
  styleUrls: ['./aboutus.scss']
})

export class AboutusComponent {
  @Input() aboutus: any;

  constructor() {}
}
