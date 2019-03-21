/**
 * component of login
 * by lzb
 */
import { Component, Input } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  template: `
  <div class="box">
    <div class="form">
      <div class="form-header">
        <img src="assets/init/favicon-144.png"/>
        <h3> webpack-angularjs </h3>
      </div>
      <p class="form-message" [hidden]="errorMessage">
        <strong>{{ errorMessage.split('-')[0] }} ：</strong>
        <i>{{ errorMessage.split('-')[1] }}</i>
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
        <button class="btn" type="button" (click)="login()" [disabled]="clickAble"> 登录 </button>
      </div>
    </div>
  </div>
  `,
  styleUrls: ['./login.scss'],
})

export class LoginComponent {
  @Input() tState;

  errorMessage: string;
  loginInfo = { username: null, password: null };
  clickAble: boolean;

  constructor(
    private authService: AuthService,
    private $state,
  ) {
    this.authService = authService;
    this.$state = $state;
  }

  // 实际开发中这样做不正确，这里只是为了演示
  login() {
    // only login-component self to check
    // if (!this.check()) return;

    this.clickAble = true;

    this
      // requset server to check
      .authService
      .auth(this.loginInfo)
      // fetch server error
      .then((errorMessage) => {
        this.errorMessage = errorMessage;
      })
      // $state.go() depend on this.tState
      .then(() => {
        this.redirectTo();
      })
      // catch unexcepted error
      .catch((error) => {
        this.errorMessage = error;
      })
      .finally(() => {
        this.clickAble = false;
      });
  }

  check(type) {
    if (type && this.loginInfo[type].trim().length <= 0) {
      this.errorMessage = `验证错误-${type}不能为空！`;
      return false;
    }

    if (this.loginInfo[type].trim().length >= 3) {
      this.errorMessage = `验证通过-${type}的长度已满足至少3位的要求。`;
    } else {
      this.errorMessage = `验证错误-${type}的长度至少需要3位！`;
      return false;
    }

    return true;
  }

  redirectTo() {
    return this.$state.go(
      this.tState.state(),
      this.tState.params(),
      {
        ...this.tState.options(),
        reload: true,
      },
    );
  }
}
