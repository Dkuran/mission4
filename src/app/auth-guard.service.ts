import { Injectable } from '@angular/core';
import { Route, CanLoad, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanLoad {

  constructor(
    private _auth: AuthService,
    private _router: Router
  ) {}

  canLoad(route: Route): boolean {
    // console.log(this._auth.getPassword());
    if (!this._auth.validatePassword()) {
      this._router.navigate(['login']);
    } else {
      return this._auth.validatePassword();
    }
    // return this._auth.validatePassword();
  }

}
