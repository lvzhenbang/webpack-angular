/**
 * component of map
 * by lzb
 */
import { Component } from '@angular/core';
import {
  Animation,
  MapOptions,
  NavigationControlOptions,
  Point,
  MarkerOptions,
  BMarker,
  BMapInstance
} from 'angular2-baidu-map';

@Component({
  selector: 'app-map',
  template: `
  <div class="sj_wrapper">
    <baidu-map [options]="options">
      <marker [point]="point" (loaded)="setAnimation($event)" (clicked)="showInfoWindow($event)"></marker>
    </baidu-map>
  </div>
  `,
  styleUrls: ['./map.scss'],
})

export class MapComponent {
  options: MapOptions;
  point: Point;
  navOptions: NavigationControlOptions;
  markerOptions: MarkerOptions;

  constructor() {
    this.options = {
      centerAndZoom: {
        lng: 116.527337,
        lat: 39.912096,
        zoom: 18,
      },
      enableKeyboard: true
    };

    this.point = {
      lng: 116.527337,
      lat: 39.912096,
    };
  }

  public showInfoWindow(
    {
      marker,
      map
    }: {
      marker: BMarker;
      map: BMapInstance
    }
  ): void {
    map.openInfoWindow(
      new window.BMap.InfoWindow('地址：北京市朝阳区高碑店西店村46号楼', {
        offset: new window.BMap.Size(0, -36),
        title: '圣捷集团'
      }),
      marker.getPosition(),
    );

    console.log(marker.getPosition())
  }

  public setAnimation(marker: BMarker): void {
    marker.setAnimation(Animation.BMAP_ANIMATION_BOUNCE);
  }
}
