import { UsersService } from './../users.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { NotificationsService } from '../../../notifications/notifications.service';
import { Delete } from '../../../shared/classes/delete';
import { User } from '../../../shared/classes/user';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss', "../../styles/crud.scss"]
})
export class DeleteComponent extends Delete<User> {
  constructor(
    public usersService: UsersService,
    public notifications: NotificationsService,
    public router: Router,
    public route: ActivatedRoute
  ) {
    super(usersService, notifications, router, route);
  }

}
