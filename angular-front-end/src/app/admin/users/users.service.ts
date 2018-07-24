import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HOST } from '../../shared/host';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../../shared/classes/user';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private api = HOST + '/users/';
  private selectedUserSubject = new BehaviorSubject<User>(null);

  constructor(
    private http: HttpClient
  ) { }

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
    return this.http.get(this.api);
  }

  getUser(id: string) {
    return this.http.get(this.api + id);
  }

  deleteUser(id: string) {
    return this.http.delete(this.api + id);
  }
}
