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
  redirectUrl: string;

  constructor(private dataService: DataService) {
    this.isLogin = false;
    this.errorMessage = '';
  }

  auth(loginInfo) {
    return this.dataService
      .getData('./assets/data/users.json')
      .toPromise()
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
