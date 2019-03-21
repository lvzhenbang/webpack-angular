/**
 * directive of map
 * by lzb
 */
import { Directive, Input } from '@angular/core';

import Map from '../utils/map';

@Directive({
  selector: '[appMap]'
})

export class MapDirective {
  @Input() appMap: string;

  config = {
    pos: {
      lat: '116.526831',
      lng: '39.911978',
    },
    infoWindow: {
      address: '地址：北京市朝阳区高碑店西店村46号楼',
      opts: {
        width: 290, // 信息窗口宽度
        height: 100, // 信息窗口高度
        title: '圣捷集团', // 信息窗口标题
      },
    },
    isWheelZoom: true,
  };

  constructor() {
    const map = new Map(document.querySelector('#map'), this.config);
    map.init();
  }
}
