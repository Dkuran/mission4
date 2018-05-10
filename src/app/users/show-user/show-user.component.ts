import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './../user.service';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.scss']
})
export class ShowUserComponent implements OnInit {
  public data: any;
  constructor(
    private _routes: ActivatedRoute,
    private _userService: UserService
  ) { }

  ngOnInit() {
    this._routes.params.subscribe(
      params => {
        this._userService.getUser(params.id).subscribe(
          response => {
            console.log(response);
            this.data = response;
          }
        );
      }
    );
  }

}
