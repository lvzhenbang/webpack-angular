/**
 * component of contactus
 * by lzb
 */
import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-contactus',
  template: `
  <div id="contactus" class="sj_contactus">
    <div class="sj_second-title">
      <span> {{ title.cn_name }} </span>
      <span> {{ title.en_name }} </span>
    </div>

    <div class="sj_wrapper">
      <!-- tag -->
      <img class="sj_tag" [src]="img">

      <div class="sj_left">
        <div class="sj_ct-logo">
          <img [src]="company.img" [alt]="company.alt">
          <span> {{ company.name }} </span>
        </div>
        <ul class="sj_ct-list">
          <li class="sj_ct-item" *ngFor="let item of list">
            <img [src]="item.img">
            <span> {{ item.text }} </span>
          </li>
        </ul>
      </div>

      <div class="sj_right">
        <ul class="sj_qr-list">
          <li class="sj_qr-item" *ngFor="let item of qr_list">
            <img [src]="item.img" [alt]="item.alt">
            <div class="sj_qr-des">
              <span> {{ item.name }} </span>
              <span> {{ item.qname }} </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <app-aboutus [aboutus]="aboutus"></app-aboutus>
  `,
  styleUrls: ['./contactus.scss']
})

export class ContactusComponent implements OnInit {
  @Input() contactus: any;
  @Input() aboutus: any;

  title: Title;
  img: string;
  company: any;
  list: any;
  'qr_list': any;

  constructor(
    private iss: DataService,
  ) {}

  ngOnInit() {
    this.iss.getData('./assets/data/index.json')
    .subscribe((data: any) => {
      this.aboutus = data.aboutus;
    });

    this.iss.getData('./assets/data/contactus.json')
    .subscribe((data: any) => {
      this.title = data.title;
      this.img = data.img;
      this.company = data.company;
      this.contactus = data;
      this.list = data.list;
      this.qr_list = data.qr_list;
    });
  }
}
