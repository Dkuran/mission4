import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class UserService {
	private url = 'https://jsonplaceholder.typicode.com/users/';
	constructor(private _http: HttpClient) {}

	getUser(id: string): Observable<any> {
    this.url = this.url.concat(id);
    console.log(this.url);
		return this._http.get(this.url);
	}
}
