/**
 * component of sxy
 * by lzb
 */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-first',
  template: `
  <div class="sj_wrapper">
    <div class="sj_block-title">
      <div> {{ cn_name }} </div>
      <div> {{ en_name }} </div>
    </div>

    <div class="sj_tabs">
      <div class="sj_tabs-container">
        <div class="sj_tab-box">
          <div class="line"></div>
          <div class="tabs">
            <a
              class="tab-item"
              *ngFor="let item of subtabs"
              [routerLink]="['./', item.type]"
              routerLinkActive="active"
              (click)="touchMove($event)">
              <div> {{ item.cn_name }} </div>
              <div> {{ item.en_name }} </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <router-outlet></router-outlet>
  </div>
  `,
  styleUrls: ['./tabs.scss']
})

export class FirstComponent implements OnInit {
  'cn_name': string;
  'en_name': string;
  subtabs: any;
  path: any;

  constructor(
    private iss: DataService,
    private route: ActivatedRoute,
  ) { }

  isActive(index) {
    return index === 0;
  }

  touchMove(event) {
    const tabItem = event.target.parentNode;
    const itemWidth = tabItem.offsetWidth;
    const currentX = tabItem.offsetLeft;
    const tabBox = tabItem.parentNode.parentNode;
    const winWidth = tabBox.offsetWidth;
    if (event.clientX > winWidth / 2) {
      tabBox.scrollTo(currentX + itemWidth / 2, 0);
    } else {
      tabBox.scrollTo(currentX - 3 * itemWidth / 2, 0);
    }
  }

  ngOnInit() {
    this.path = this.route.snapshot.routeConfig.path;
    this.iss
      .getData('/assets/data/sidenav.json')
      .subscribe((data: any) => {
        this.cn_name = data[this.path].cn_name;
        this.en_name = data[this.path].en_name;
        this.subtabs = data[this.path].subtabs;
      });
  }
}
