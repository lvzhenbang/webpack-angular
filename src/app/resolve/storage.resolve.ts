import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';
import { DataService } from '../services/data.service';

@Injectable({
  providedIn: 'root',
})

export class StorageReslove implements Resolve<any> {
  constructor(private iss: DataService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Observable<never> {
    return this.iss.getData('/assets/data/index.json').pipe(
      take(1),
      mergeMap(data => {
        if (data) {
          console.log(data);
          return of(data);
        } else {
          // this.router.navigate(['/page-not']);
          return EMPTY;
        }
      })
    );
  }
}
