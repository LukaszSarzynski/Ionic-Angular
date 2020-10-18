import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLogin = false

  constructor() { }

  get isUserLogin() {
    return this.isLogin;
  }

  login() {
    this.isLogin = true;
  }

  logout() {
    this.isLogin = false;
  }
}
