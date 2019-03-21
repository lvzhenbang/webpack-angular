/**
 * component of backtop
 * by lzb
 */
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-backtop',
  template: '<div class="back-to-top" title="返回顶部" [appBacktop]></div>',
  styleUrls: ['./backtop.scss']
})

export class BacktopComponent {
  constructor() {}
}
