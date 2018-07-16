import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './../shared/classes/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignIn } from '../shared/classes/sign-in';
import { SignUp } from '../shared/classes/sign-up';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private api = 'http://localhost:3000/users';
  private userSubject: BehaviorSubject<User>;

  token: string;

  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService,
    private router: Router
  ) {
    this.checkSession();
  }
  private checkSession() {
    let token: string = null, user: User = null;
    if (this.loggedIn) {
      console.log('user is already logged in');
      token = localStorage.getItem('token');
      user = JSON.parse(localStorage.getItem('user')) as User;
    }
    this.token = token;
    this.userSubject = new BehaviorSubject<User>(user);
  }

  get user(): Observable<User> {
    return this.userSubject.asObservable();
  }

  loggedIn() {
    return !this.jwtHelper.isTokenExpired();
  }

  signIn(signIn: SignIn) {
    return this.http.post(this.api + '/sign-in', signIn);
  }

  signUp(signUp: SignUp) {
    return this.http.post(this.api + '/sign-up', signUp);
  }

  signOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.updateUserData(null, null);
    this.router.navigate(['']);
  }

  updateUserData(user: User, token: string) {
    console.log('Updated user : ', user);
    this.userSubject.next(user);
    this.token = token;
    if (user && token) {
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
    }
  }

}
