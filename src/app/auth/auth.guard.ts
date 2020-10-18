import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor(private svAuth: AuthService, private router: Router) {}

  canLoad(
    route: Route, 
    segments: UrlSegment[]
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(!this.svAuth.isUserLogin) {
        this.router.navigateByUrl('/auth');
      }
      return this.svAuth.isUserLogin;
  }
}
