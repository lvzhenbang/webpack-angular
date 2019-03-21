/**
 * component of partners
 * by lzb
 */
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-partners',
  template: `
  <div class="sj_partner sj_wrapper">
    <app-blocktitle [title]="partners.title"></app-blocktitle>

    <div class="sj_partner-list">
      <div class="sj_partner-item" *ngFor="let item of partners.list">
        <img [src]="item.img" [alt]="item.alt">
      </div>
    </div>
  </div>
  `,
  styleUrls: ['./partners.scss']
})

export class PartnersComponent {
  @Input() partners: any[];

  constructor() {}
}
