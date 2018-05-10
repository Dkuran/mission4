import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  private password: string;
  private hidePassword = '1234';
	constructor() {}

	// getPassword(): String {
  //   return this.password;
  // }
  validatePassword(): boolean {
    return this.password === this.hidePassword;
  }

	setPassword(value: string) {
    this.password = value;
	}
}
