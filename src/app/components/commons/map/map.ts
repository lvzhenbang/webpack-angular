/**
 * component of map
 * by lzb
 */
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-map',
  template: `
  <div class="sj_wrapper">
    <div id="map" [appMap]></div>
  </div>
  `,
  styleUrls: ['./map.scss'],
})

export class MapComponent {
  constructor() {}
}
