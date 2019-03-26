/**
 * component of index
 * by lzb
 */
import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-index',
  template: `
    <div>
      <app-banner [banner]="banner"></app-banner>
      <app-products [products]="products"></app-products>
      <app-partners [partners]="partners"></app-partners>
      <app-aboutus [aboutus]="aboutus"></app-aboutus>
    </div>
  `,
})

export class IndexComponent implements OnInit {
  @Input() banner: any;
  @Input() products: any;
  @Input() partners: any;
  @Input() aboutus: any;

  constructor(
    private iss: DataService,
  ) {}

  ngOnInit() {
    this.iss.getData('/assets/data/index.json')
    .subscribe((data: any) => {
      this.banner = data.banner;
      this.products = data.products;
      this.partners = data.partners;
      this.aboutus = data.aboutus;
    });
  }
}
