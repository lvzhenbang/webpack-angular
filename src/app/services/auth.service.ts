/**
 * service of auth
 * by lzb
 */
import { Injectable } from '@angular/core';

import { DataService } from './data.service';

@Injectable()
export class AuthService {
  isLogin: boolean;
  errorMessage: string;

  constructor(private dataService: DataService) {
    this.isLogin = false;
    this.errorMessage = '';
  }

  auth(loginInfo) {
    return Promise.resolve(this.dataService
      .getData('data/users.json'))
      .then((data: any) => {
        if (data && data.username !== loginInfo.username) {
          this.errorMessage = '错误-用户名不存在!';
          return false;
        }

        if (data && data.password !== loginInfo.password) {
          this.errorMessage = '错误-密码不正确!';
          return false;
        }

        this.errorMessage = '错误-登录成功.';
        return true;
      })
      .then((isLogin) => {
        this.isLogin = isLogin;
        return this.errorMessage;
      });
  }
}

export function AuthRunBlock($transitions) {
  $transitions.onBefore(
    {
      to: state => state.data && state.data.requiresAuth,
    },
    (transition) => {
      const AS: AuthService = transition.injector().get('authService');
      if (!AS.isLogin) {
        return transition
          .router
          .stateService
          .target('login', undefined, { location: false });
      }
      return true;
    },
    { priority: 10 },
  );
}
