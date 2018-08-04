import { UsersService } from './../users.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NotificationsService } from "./../../../notifications/notifications.service";
import { Component, OnInit } from "@angular/core";
import { User } from '../../../shared/classes/user';
import { Create } from '../../../shared/classes/create';

@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.scss", "../../styles/crud.scss"]
})
export class CreateComponent extends Create<User> {
  user = new User();
  roles = [
    "Customer",
    "Admin"
  ];
  
  constructor(
    public usersService: UsersService,
    public router: Router,
    public route: ActivatedRoute,
    public notifications: NotificationsService
  ) {
    super(usersService, notifications, router, route);
  }
}
