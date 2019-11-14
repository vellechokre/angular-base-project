import { Injectable } from '@angular/core';

import { JwtHelper } from 'angular2-jwt';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';
@Injectable()
export class AuthService {

  jwtHelper: JwtHelper = new JwtHelper();
  isAuthorized: Subject<boolean> = new Subject();

  constructor(
    private router: Router
  ) { }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    if (!token) return false;
    // Check whether the token is expired and return true or false
    const isUserAuthorized =  !this.jwtHelper.isTokenExpired(token);
    this.isAuthorized.next(isUserAuthorized);
    return isUserAuthorized;
  }

  public loginSuccesful() {
    this.router.navigate([''])
  }
}