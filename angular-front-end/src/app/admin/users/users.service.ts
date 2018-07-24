import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HOST } from '../../shared/host';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private api = HOST + '/users/';

  constructor(
    private http: HttpClient
  ) { }

  getUsers() {
    return this.http.get(this.api);
  }

  deleteUser(id: string) {
    return this.http.delete(this.api + id);
  }
}
