/**
 * service of auth
 * by lzb
 */
import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanActivateChild,
  CanLoad,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  Route
} from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class UserLoginGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const url = state.url;
    return this.checkLogin(url);
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return this.canActivate(route, state);
  }

  canLoad(route: Route): boolean {
    const url = `/${route.path}`;
    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    if (this.authService.isLogin) {
      return true;
    }
    this.authService.redirectUrl = url;
    this.router.navigate(['/login']);
    return false;
  }
}
