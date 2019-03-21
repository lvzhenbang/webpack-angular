/**
 * service of data-http
 * by lzb
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {
  constructor(
    private http: HttpClient,
  ) {}

  getData(address) {
    return this.http.get(address);
  }
}
