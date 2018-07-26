import { NotificationsService } from "./../../../notifications/notifications.service";
import { AuthService } from "./../../../auth/auth.service";
import { Component, OnInit } from "@angular/core";
import { Register } from "../../../shared/classes/register";

@Component({
  selector: "app-add",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.scss"]
})
export class AddComponent implements OnInit {
  user = new Register();
  constructor(
    private auth: AuthService,
    private notifications: NotificationsService
  ) {}

  ngOnInit() {}

  onSubmit(form: any) {
    const user: Register = form.value;
    console.log(user);
    this.auth.register(user).subscribe(
      (res: any) => {
        console.log(res);
        this.notifications.show(
          `Added user (ID: ${res.newUser._id}`,
          "Users",
          "success"
        );
      },
      e => {
        this.notifications.show(
          `Email address or username already in use`,
          "Users",
          "danger"
        );
        form.resetForm();
      }
    );
  }
}
