/**
 * component of styleus
 * by lzb
 */
import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

import { rightIn } from '../../../animations';

@Component({
  selector: 'app-styleus',
  template: `
  <div class="sj_style-list sj_wrapper">
    <app-blocktitle [title]="styleus.title"></app-blocktitle>

    <div class="style-list" [@rightIn]="styleus.list.length">
      <div
        class="style-item"
        *ngFor="let item of styleus.list"
        [ngStyle]="itemStyle(item.width, item.height)">
        <img
          [src]="item.img"
          [width]="item.width"
          [height]="item.height"
          [title]="item.title">
        <div class="desc"> {{ item.desc }} </div>
      </div>
    </div>
  </div>
  `,
  styleUrls: ['./styleus.scss'],
  animations: [ rightIn ]
})

export class StyleusComponent implements OnInit {
  @Input() styleus: any;

  constructor(
    private iss: DataService,
  ) { }

  itemStyle(width, height) {
    return { width: `${width}px`, height: `${height}px` };
  }

  ngOnInit() {
    this.iss.getData('/assets/data/styleus.json')
    .subscribe((data: any) => {
      this.styleus = data;
    });
  }
}
