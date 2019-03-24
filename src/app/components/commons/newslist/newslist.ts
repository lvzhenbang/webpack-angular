/**
 * component of products
 * by lzb
 */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { DataService } from 'src/app/services/data.service';

import { zoomIn } from '../../../animations';

@Component({
  selector: 'app-newslist',
  template: `
  <div class="sj_tab-content">
    <div
      class="sj_new-item"
      @zoomIn
      *ngFor="let item of data; index as i"
      [attr.type]="item.type"
      [ngClass]="{ reverse: isReverse(i) }">

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
  `,
  styleUrls: ['./newslist.scss'],
  animations: [ zoomIn ]
})

export class NewslistComponent implements OnInit {
  data: Observable<any>;
  type: string;

  constructor(
    private iss: DataService,
    private route: ActivatedRoute
  ) {}

  isReverse(index: number) {
    return index % 2 !== 0;
  }

  ngOnInit() {
    this.route.paramMap.pipe(
      map((params: ParamMap) => {
       this.type = params.get('type');
      }),
      switchMap(() => {
        return this.iss.getData('/assets/data/newscenter.json');
      })
    ).subscribe((data: any) => {
      const rData = data.list;
      if (!this.type) {
        this.data = rData;
      } else {
        this.data = rData.filter(item => item.type === this.type);
      }
    });
  }
}
