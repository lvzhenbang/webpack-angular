/**
 * component of newscenter
 * by lzb
 */
import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-newscenter',
  template: `
  <div class="sj_news-center">
    <div class="sj_second-title">
      <span> {{ cn_name }} </span>
      <span> {{ en_name }} </span>
    </div>
    <div class="sj_wrapper">
      <div class="sj_tab">
        <div
          class="sj_tab-item"
          *ngFor="let item of types"
          [attr.type]="item.type"
          [ngClass]="{ active: isActive(item.type) }"
          (click)="showItem($event, item.type)"> {{ item.name }} </div>
      </div>
      <div class="sj_tab-content">
        <div
          class="sj_new-item"
          *ngFor="let item of list; index as i"
          [attr.type]="item.type"
          [ngClass]="{ reverse: isReverse(i), hide: isHide(item.type)}"
          [ngStyle]="{ 'display': isShow(item.type)}">

          <a [href]="item.href">
            <img [src]="item.img" [alt]="item.alt">
          </a>

          <div class="sj_new-content">
            <div class="sj_new-title">
              <a [href]="item.href"> {{ item.title }} </a>
            </div>
            <div class="sj_new-link">原文链接</div>
            <div class="sj_new-date"> {{ item.date }} </div>
            <div class="sj_new-desc multi-line"> {{ item.desc }} </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  `,
  styleUrls: ['./newscenter.scss']
})

export class NewscenterComponent implements OnInit {
  @Input() newscenter: any;

  'cn_name': string;
  'en_name': string;
  types: any;
  list: any;

  constructor(
    private iss: DataService,
  ) { }

  isActive(flag: string) {
    return flag === '1';
  }

  isReverse(index: number) {
    return index % 2 !== 0;
  }

  isHide(type: string) {
    return type !== '1';
  }

  isShow(type: string) {
    return type !== '1' ? 'none' : '';
  }

  showItem(event: any, type: string) {
    document.querySelectorAll('.sj_tab-item').forEach((item) => {
      item.classList.remove('active');
    });
    event.target.classList.add('active');
    document.querySelectorAll('.sj_new-item').forEach((item) => {
      if (item.getAttribute('type') === type) {
        item.setAttribute('style', '');
        item.classList.remove('hide');
      } else {
        item.classList.add('hide');
        item.setAttribute('style', 'display: none');
      }
    });
  }

  ngOnInit() {
    this.iss.getData('/assets/data/newscenter.json')
    .subscribe((data: any) => {
      this.cn_name = data.cn_name;
      this.en_name = data.en_name;
      this.types = data.types;
      this.list = data.list;
    });
  }
}
