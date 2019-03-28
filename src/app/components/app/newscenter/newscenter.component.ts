/**
 * component of newscenter
 * by lzb
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
        <a
          class="sj_tab-item"
          *ngFor="let item of types"
          [routerLink]="['./', item.type]"
          routerLinkActive="active"> {{ item.name }} </a>
      </div>
      <router-outlet></router-outlet>
    </div>
  </div>
  `,
  styleUrls: ['./newscenter.scss']
})

export class NewscenterComponent implements OnInit {
  'cn_name': string;
  'en_name': string;
  types: any;

  constructor(
    private router: Router,
    private iss: DataService,
  ) {}

  ngOnInit() {
    this.iss.getData('./assets/data/newscenter.json')
      .subscribe((data: any) => {
        this.cn_name = data.cn_name;
        this.en_name = data.en_name;
        this.types = data.types;
      });

    this.router.navigate(['./newscenter', '1']);
  }
}
