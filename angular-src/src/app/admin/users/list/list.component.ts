import { Component, OnInit } from "@angular/core";
import { UsersService } from "../users.service";
import { User } from "../../../shared/classes/user";
import { Router } from "@angular/router";

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
  constructor(private usersService: UsersService, private router: Router) {}

  ngOnInit() {
    this.usersService
      .getUsers()
      .subscribe((res: any) => (this.users = res.data ? res.data : []));
  }

  onAction(action: string, user: User) {
    let id = "";
    if (user) {
      console.log(user);
      id = user.id;
      this.usersService.setSelectedUser(user);
    }
    this.router.navigate(["users", action, id]);
  }
}
