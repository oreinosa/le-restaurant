import { UsersService } from './../users.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NotificationsService } from "./../../../notifications/notifications.service";
import { Component, OnInit } from "@angular/core";
import { Register } from "../../../shared/classes/register";
import { NgForm } from '@angular/forms';
import { User } from '../../../shared/classes/user';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: "app-add",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.scss"]
})
export class AddComponent implements OnInit {
  user = new Register();
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
    const user: Register = form.value;
    this.usersService.addUser(user).subscribe(
      (user: User) => {
        // console.log(user);
        this.notifications.show(
          `Added user (ID: ${user._id}`,
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