import { Component, OnInit, OnDestroy } from "@angular/core";
import { UsersService } from "../users.service";
import { User } from "../../../shared/classes/user";
import { Router } from "@angular/router";
import { List } from "../../../shared/classes/list";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"]
})
export class ListComponent extends List<User> {
  constructor(
    public service: UsersService,
    public router: Router,
  ) {
    super(
      service,
      router,
      ["id", "createdAt", "name", "username", "email", "role", "actions"]
    );
  }

  onAction(action: string, user: User) {
    let username = "";
    if (user) {
      username = user['username'];
      this.service.setSelectedObject(user);
    }
    this.router.navigate(["admin", this.service.collectionName.toLowerCase(), action, username]);
  }
}
