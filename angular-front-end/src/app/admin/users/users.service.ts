import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { HOST } from '../../shared/host';
=======
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../../shared/classes/user';

>>>>>>> 71bb4eed21cb207e95a27cb0d3ee0db15815827a
@Injectable({
  providedIn: 'root'
})
export class UsersService {
<<<<<<< HEAD
  private api = HOST + '/users/';
=======
  private api = 'http://localhost:3000/users/';
  private selectedUserSubject = new BehaviorSubject<User>(null);
>>>>>>> 71bb4eed21cb207e95a27cb0d3ee0db15815827a

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
