import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './../shared/classes/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../shared/classes/login';
import { Register } from '../shared/classes/register';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HOST } from '../shared/host';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private api = HOST + '/auth';
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

  login(login: Login) {
    return this.http.post(this.api + '/login', login);
  }

  register(register: Register) {
    return this.http.post(this.api + '/register', register);
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
