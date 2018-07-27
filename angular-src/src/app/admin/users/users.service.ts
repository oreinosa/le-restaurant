import { map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HOST } from '../../shared/host';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../../shared/classes/user';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private api = HOST + 'users/';
  private selectedUserSubject = new BehaviorSubject<User>(null);
  users = new BehaviorSubject<User[]>([]);
  constructor(
    private http: HttpClient
  ) {
  }

  getSelectedUser(): Observable<User> {
    return this.selectedUserSubject.asObservable();
  }

  setSelectedUser(user: User): void {
    return this.selectedUserSubject.next(user);
  }

  isUserSelected(): boolean {
    return !!this.selectedUserSubject.getValue();
  }

  getUsers() {
    return this.http.get<any>(this.api)
      .pipe(
        map(res => {
          return res.data as User[];
        }),
        tap(users => {
          this.users.next(users);
        })
      );
  }

  getUser(username: string) {
    return this.http.get<any>(this.api + username)
      .pipe(
        map(res => {
          return res.data as User;
        })
      );
  }

  addUser(user: User) {
    return this.http.post<any>(this.api, user)
      .pipe(
        map(res => {
          return res.data as User;
        }),
        tap(addedUser => {
          const users = this.users.getValue().slice();
          users.push(addedUser);
          this.users.next(users);
        })
      );
  }

  editUser(username: string, user: User) {
    return this.http.put<any>(this.api + username, user)
      .pipe(
        map(res => {
          return res.data as User;
        }),
        tap(editedUser => {
          const users = this.users.getValue().slice();
          const index = users.findIndex(_user => _user._id === editedUser._id);
          users[index] = editedUser;
          this.users.next(users);
        })
      );
  }

  deleteUser(username: string) {
    return this.http.delete(this.api + username).pipe(
      tap(() => {
        const users = this.users.getValue().slice();
        const index = users.findIndex(_user => _user.username === username);
        users.splice(index, 1);
        this.users.next(users);
      })
    );
  }
}
