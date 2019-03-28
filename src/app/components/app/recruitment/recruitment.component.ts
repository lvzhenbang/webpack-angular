/**
 * component of recruitment
 * by lzb
 */
import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-recruitment',
  template: `
  <div class="sj_recruitment">
    <img [src]="img">

    <div class="sj_wrapper shadow">
      <div class="sj_second-title">
        <span>{{ title.cn_name }}</span>
        <span>{{ title.en_name }}</span>
      </div>
    </div>

    <div class="sj_table">
      <div class="sj_table-header">
        <div class="sj_table-th" *ngFor="let item of thead">
          <span> {{ item.cn_name }} </span>
          <span> {{ item.en_name }} </span>
        </div>
      </div>

      <div class="sj_table-body">
        <div class="sj_table-tr" *ngFor="let item of list">
          <div class="sj-table-tt">
            <div class="sj_table-td"> {{ item.position}} </div>
            <div class="sj_table-td"> {{ item.num }} </div>
            <div class="sj_table-td"> {{ item.address }} </div>
            <div
              class="sj_table-td sj_arrow-more"
              [ngClass]="{ active: isActive(index)}">
              <span></span>
            </div>
          </div>

          <div class="sj_table-details" *ngStyle="detailStyle(index)">
            <div class="sj_recruit-list">
              <div class="sj_recruit-item sj_horizontal">
                <div class="sj_recruit-title">待遇</div>
                <div class="sj_recruit-content"> {{ item.details.pay }} </div>
              </div>
              <div class="sj_recruit-item">
                <div class="sj_recruit-title">岗位职责</div>
                <div class="sj_recruit-content">
                  <p *ngFor="let value of item.details.responsibilities; index as num">
                    {{ (num+1)  + ' 、' + value }}
                  </p>
                </div>
              </div>
              <div class="sj_recruit-item">
                <div class="sj_recruit-title">任职要求</div>
                <div class="sj_recruit-content">
                  <p *ngFor="let value of item.details.job_requirements; index as num">
                    {{ (num+1) + ' 、' + value }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  `,
  styleUrls: ['./recruitment.scss']
})

export class RecruitmentComponent implements OnInit {
  @Input() recruitment: any;
  title: Title;
  thead: any;
  list: any;
  img: any;

  constructor(
    private iss: DataService,
  ) { }

  isActive(index) {
    return index === 0;
  }

  detailStyle(index) {
    return (index === 0 ? { display: 'block' } : {});
  }

  ngOnInit() {
    this.iss.getData('./assets/data/recruitment.json')
    .subscribe((data: any) => {
      this.recruitment = data;
      this.thead = data.thead;
      this.list = data.list;
      this.img = data.img;
      this.title = data.title;
    });
  }
}
