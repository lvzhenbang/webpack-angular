/**
 * component of products
 * by lzb
 */
import { Component, Input } from '@angular/core';

import { indexIn } from '../../../animations';

@Component({
  selector: 'app-products',
  template: `
  <div class="sj_loan_product sj_wrapper" @indexIn>
    <app-blocktitle [title]="products.title"></app-blocktitle>

    <div class="sj_product-list" *ngIf="products.list.length">
        <div class="sj_product-item" *ngFor="let item of products.list">
          <a [routerLink]="item.href">
            <div class="sj_left">
              <div class="sj_top">
                <div> {{ item.cn_name }} </div>
                <div> {{ item.en_name }} </div>
              </div>
              <div class="sj_bottom">
                <div class="sj_more">
                  <span>MORE</span>
                </div>
              </div>
            </div>
            <div class="sj_right">
              <img [src]="item.img" [alt]="item.cn_name">
            </div>
          </a>
        </div>
    </div>
  </div>
  `,
  styleUrls: ['./products.scss'],
  animations: [ indexIn ]
})

export class ProductsComponent {
  @Input() products: any;

  constructor() {}
}
