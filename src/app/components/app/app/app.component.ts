/**
 * component of app
 * by lzb
 */
import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-root',
  template: `
  <div *ngIf="index">
    <app-header [logo]="index.logo" [nav]="index.nav"></app-header>
    <app-header [logo]="index.logo" [nav]="index.nav" [appNavfixed]></app-header>

    <router-outlet></router-outlet>

    <app-map></app-map>
    <app-footer [nav]="index.nav" [qrcode]="index.qrcode" [service]="index.service"></app-footer>
    <app-backtop></app-backtop>
  </div>
  `,
})

export class AppComponent implements OnInit {
  @Input() index: any;

  constructor(
    private iss: DataService,
  ) {}

  ngOnInit() {
    this.iss.getData('./assets/data/index.json')
    .subscribe((data) => {
      this.index = data;
    });
  }
}
