import { Injectable } from '@angular/core';
import { Route, CanLoad } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanLoad {

  constructor(
    private _auth: AuthService
  ) {}

  canLoad(route: Route): boolean {
    // console.log(this._auth.getPassword());
    return this._auth.validatePassword();
  }

}
