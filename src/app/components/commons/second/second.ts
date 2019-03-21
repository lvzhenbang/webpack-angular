import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, map, tap } from 'rxjs/operators';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.html',
  styleUrls: ['./second.scss']
})

export class SecondComponent implements OnInit {
  data: Observable<any>;
  type: any;

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
