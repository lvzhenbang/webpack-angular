/**
 * service of loading
 * by lzb
 */
import { Injectable } from '@angular/core';

@Injectable()
export class LoadingService {
  constructor() {}

  showLoading() {
    let oDiv = document.querySelector('.spinner') || null;
    if (oDiv) {
      oDiv.classList.remove('hide');
    } else {
      oDiv = document.createElement('div');
      oDiv.classList.add('spinner');
      oDiv.innerHTML = `<div class="spin-fade-loader">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      </div>
      `;
      document.body.appendChild(oDiv);
    }
  }

  hideLoading() {
    const spinner = document.querySelector('.spinner');
    spinner.classList.add('hide');
  }
}

export function LoadingRunBlock(transitionService, lService: LoadingService) {
  transitionService.onStart({ /* match anything */ }, lService.showLoading);
  transitionService.onFinish({ /* match anything */ }, lService.hideLoading);
}
