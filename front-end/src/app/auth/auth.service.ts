import { User } from './../shared/classes/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignIn } from '../shared/classes/sign-in';
import { SignUp } from '../shared/classes/sign-up';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private api = 'http://localhost:3000/users';

  user: User;
  token: string;

  constructor(
    private http: HttpClient
  ) { }

  signIn(signIn: SignIn) {
    return this.http.post(this.api + '/sign-in', signIn);
  }

  signUp(signUp: SignUp) {
    return this.http.post(this.api + '/sign-up', signUp);
  }

  updateUserData(user: User, token: string) {
    console.log('Updated user : ', user);
    this.user = user;
    this.token = token;
  }

}
