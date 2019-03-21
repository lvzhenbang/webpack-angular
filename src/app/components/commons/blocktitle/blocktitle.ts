/**
 * component of block-title
 * by lzb
 */
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blocktitle',
  template: `
  <div class="sj_index-title">
    <span> {{ title.cn_name }} </span>
    <div></div>
    <span> {{ title.en_name }} </span>
  </div>
  `,
  styleUrls: ['./title.scss'],
})

export class BlocktitleComponent {
  @Input() title: any;
  constructor() { }
}
