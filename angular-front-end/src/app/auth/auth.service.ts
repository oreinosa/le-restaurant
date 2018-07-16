import { BehaviorSubject, Observable } from 'rxjs';
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
  private userSubject: BehaviorSubject<User>;

  token: string;

  constructor(
    private http: HttpClient
  ) {
    this.checkSession();
  }
  private checkSession() {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user') as User;
    this.token = token;
    this.userSubject = new BehaviorSubject<User>(user);
  }

  get user(): Observable<User> {
    return this.userSubject.asObservable();
  }

  loggedIn() {
    // return tokenNotExpired();
  }

  signIn(signIn: SignIn) {
    return this.http.post(this.api + '/sign-in', signIn);
  }

  signUp(signUp: SignUp) {
    return this.http.post(this.api + '/sign-up', signUp);
  }

  signOut() {
    return this.http.post(this.api + '/sign-out', {});
  }

  updateUserData(user: User, token: string) {
    console.log('Updated user : ', user);
    this.userSubject.next(user);
    this.token = token;
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
  }

}
