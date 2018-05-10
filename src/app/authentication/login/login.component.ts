import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public userPass = '';
  constructor(
    private _route: Router,
    private _auth: AuthService
  ) { }

  ngOnInit() {
  }

  submitPassword() {
    console.log(this.userPass);
    this._auth.setPassword(this.userPass);
    this.userPass = '';
    this._route.navigate([ 'users', Math.floor((Math.random() * 10) + 1) ]);
    // this._route.navigate([ 'auth', this.userPass ]);
    // this.userPass = '';

  }
}
