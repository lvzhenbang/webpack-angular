/**
 * service of loading
 * by lzb
 */
import { Injectable } from '@angular/core';

@Injectable()
export class ServiceworkerService {
  constructor() { }

  private check() {
    if ('serviceWorker' in window.navigator) {
      return true;
    }

    return false;
  }

  register(worker) {
    if (this.check()) {
      window.navigator.serviceWorker.register(worker);
    }
  }
}

export function serviceWokerRunBlock(sw: ServiceworkerService) {
  sw.register('./service-worker.js');
}
