import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "../../shared/classes/user";
import { DAO } from "../../shared/classes/dao";
@Injectable({
  providedIn: 'root'
})
export class UsersService extends DAO<User> {
  constructor(httpClient: HttpClient) {
    super(httpClient, "users", "user", "Users");
  }
}
