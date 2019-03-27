/**
 * component of login
 * by lzb
 */
import { Component, Input } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  template: `
  <div class="box">
    <div class="form">
      <div class="form-header">
        <img src="assets/init/favicon-152.png"/>
        <h3> webpack-angular </h3>
      </div>
      <p class="form-message" [hidden]="hideError">
        <strong>{{ errorTitle }} ：</strong>
        <i>{{ errorBody }}</i>
      </p>
      <div class="form-content">
        <div class="text-input">
          <label for="username">用户名：</label>
          <input
            id="username"
            type="text"
            name="username"
            placeholder="请输入用户名"
            (keyup)="check('username')"
            [(ngModel)]="loginInfo.username">
        </div>
        <div class="text-input">
          <label for="password">密码：</label>
          <input
            type="password"
            name="password"
            placeholder="请输入密码"
            (keyup)="check('password')"
            [(ngModel)]="loginInfo.password">
        </div>
        <button class="btn" type="button" (click)="login()" [disabled]="disableClick"> 登录 </button>
      </div>
    </div>
  </div>
  `,
  styleUrls: ['./login.scss'],
})

export class LoginComponent {
  loginInfo = {
    username: '',
    password: '',
  };
  disableClick: boolean;
  loginState = {
    username: false,
    password: false,
  };

  hideError: boolean;
  errorTitle: string;
  errorBody: string;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {
    this.hideError = true;
    this.disableClick = true;
  }

  // 实际开发中这样做不正确，这里只是为了演示
  login() {
    this
      // requset server to check
      .authService
      .auth(this.loginInfo)
      // fetch server error
      .then(() => {
        if (this.authService.isLogin) {
          this.redirectTo();
        } else {
          this.hideError = false;
          this.setError(this.authService.errorMessage);
        }
      })
      // catch unexcepted error
      .catch((error) => {
        this.hideError = false;
        this.setError(`错误-${error}`);
      })
      .finally(() => {
        this.disableClick = false;
      });
  }

  check(type) {
    if (type && this.loginInfo[type].trim().length <= 0) {
      this.hideError = false;
      this.loginState[type] = false;
      this.setError(`${type}验证错误-${type}不能为空！`);
    }

    if (this.loginInfo[type].trim().length >= 3) {
      this.hideError = false;
      this.loginState[type] = true;
      this.setError(`${type}验证通过-${type}的长度已满足至少3位的要求。`);
    } else {
      this.hideError = false;
      this.loginState[type] = false;
      this.setError(`${type}验证错误-${type}的长度至少需要3位！`);
    }

    if (this.loginState.username && this.loginState.password) {
      this.setError(`验证通过-密码和用户名输入合法。`);
      this.disableClick = false;
    } else {
      this.disableClick = true;
    }
  }

  setError(message) {
    this.errorTitle = message.split('-')[0];
    this.errorBody = message.split('-')[1];
  }

  redirectTo() {
    return this.router.navigateByUrl(this.router.parseUrl(this.authService.redirectUrl));
  }
}
