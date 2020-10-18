import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  constructor(private svAuth: AuthService, private route: Router) { }

  ngOnInit() {
  }

  onLogin() {
    this.svAuth.login();
    this.route.navigateByUrl('/places')
  }

}
