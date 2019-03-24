import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, map, tap } from 'rxjs/operators';
import { DataService } from 'src/app/services/data.service';

import { flipIn } from '../../../animations';

@Component({
  selector: 'app-second',
  templateUrl: './second.html',
  styleUrls: ['./second.scss'],
  animations: [ flipIn ]
})

export class SecondComponent implements OnInit {
  data: Observable<any>;
  path: string;
  type: string;

  constructor(
    private iss: DataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.pipe(
      map((params: ParamMap) => {
        this.type = params.get('type');
        return this.route.parent.routeConfig.path;
      }),
      switchMap(path => {
        // console.log(path);
        return this.iss.getData(`/assets/data/${path}.json`);
      })
    ).subscribe(data => {
      this.data = data[this.type];
      // console.log(this.data);
    });
  }
}
