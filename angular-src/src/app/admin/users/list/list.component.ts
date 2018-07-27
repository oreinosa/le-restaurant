import { Component, OnInit, OnDestroy } from "@angular/core";
import { UsersService } from "../users.service";
import { User } from "../../../shared/classes/user";
import { Router } from "@angular/router";
import { switchMap, tap, takeUntil } from "rxjs/operators";
import { Subject } from "rxjs";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"]
})
export class ListComponent implements OnInit, OnDestroy {
  private ngUnsubscribe = new Subject();
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

  constructor(private usersService: UsersService, private router: Router) {}

  ngOnInit() {
    this.usersService
      .getUsers()
      .pipe(
        switchMap(() => this.usersService.users),
        takeUntil(this.ngUnsubscribe),
        tap(users => console.log("Users : ", users))
      )
      .subscribe((users: User[]) => (this.users = users));
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
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
