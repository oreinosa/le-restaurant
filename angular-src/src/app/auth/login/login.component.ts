import { NotificationsService } from "./../../notifications/notifications.service";
import { AuthService } from "./../auth.service";
import { Login } from "./../../shared/classes/login";
import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  login: Login = new Login();
  constructor(
    public dialogRef: MatDialogRef<LoginComponent>,
    private auth: AuthService,
    private notifications: NotificationsService
  ) {}

  ngOnInit() {}

  onSubmit(form: any) {
    const loginForm: Login = form.value;
    this.auth.login(loginForm).subscribe(
      (res: any) => {
        console.log(res);
        this.auth.updateUserData(res.user, res.token);
        this.notifications.show(
          `Hello ${res.user.name}!`,
          undefined,
          "success"
        );
        this.dialogRef.close({
          user: res.user
        });
      },
      e => {
        console.log(e);
        this.notifications.show(
          "Email address or password are incorrect",
          undefined,
          "danger"
        );
        form.resetForm();
      }
    );
  }
}
