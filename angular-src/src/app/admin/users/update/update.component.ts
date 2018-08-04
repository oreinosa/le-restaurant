import { Component } from "@angular/core";
import { User } from "../../../shared/classes/user";
import { Router, ActivatedRoute } from "@angular/router";
import { UsersService } from "../users.service";
import { NotificationsService } from './../../../notifications/notifications.service';
import { Update } from "../../../shared/classes/update";

@Component({
  selector: "app-update",
  templateUrl: "./update.component.html",
  styleUrls: ["./update.component.scss", "../../styles/crud.scss"]
})
export class UpdateComponent extends Update<User> {
  roles = [
    "Customer",
    "Admin"
  ];
  constructor(
    public service: UsersService,
    public notifications: NotificationsService,
    public router: Router,
    public route: ActivatedRoute
  ) {
    super(service, notifications, router, route);
  }
}
