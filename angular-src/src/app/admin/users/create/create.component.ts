import { UsersService } from './../users.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NotificationsService } from "./../../../notifications/notifications.service";
import { Component, OnInit } from "@angular/core";
import { NgForm } from '@angular/forms';
import { User } from '../../../shared/classes/user';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.scss"]
})
export class CreateComponent implements OnInit {
  user = new User();
  roles = [
    "Customer",
    "Admin"
  ];
  constructor(
    private usersService: UsersService,
    private router: Router,
    private route: ActivatedRoute,
    private notifications: NotificationsService
  ) { }

  ngOnInit() { }

  onSubmit(form: NgForm) {
    const user: User = form.value;
    this.usersService.addUser(user).subscribe(
      (addedUser: User) => {
        // console.log(user);
        this.notifications.show(
          `Added user (ID: ${addedUser._id}`,
          "Users",
          "success"
        );
        this.router.navigate(['../'], { relativeTo: this.route });
      },
      (e: HttpErrorResponse) => {
        console.log(e.error);
        this.notifications.show(
          e.error,
          "Users",
          "danger"
        );
        form.resetForm();
      }
    );
  }
}
