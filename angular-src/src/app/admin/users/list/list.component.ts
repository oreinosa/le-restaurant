import { Component, OnInit } from "@angular/core";
import { UsersService } from "../users.service";
import { User } from "../../../shared/classes/user";
import { Router } from "@angular/router";
import { switchMap, tap } from "rxjs/operators";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"]
})
export class ListComponent implements OnInit {
  displayedColumns: string[] = [
    "id",
    "name",
    "username",
    "email",
    "role",
    "createdAt",
    "actions"
  ];
  users: User[];

  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit() {
    this.usersService
      .getUsers().pipe(
        switchMap(() => this.usersService.users),
        tap(users => console.log(users))
      )
      .subscribe((users: User[]) => this.users = users);
  }

  onAction(action: string, user: User) {
    let username = "";
    if (user) {
      username = user.username;
      this.usersService.setSelectedUser(user);
    }
    this.router.navigate(["admin", "users", action, username]);
  }
}
