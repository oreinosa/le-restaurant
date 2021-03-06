import { NotificationsService } from "./../../notifications/notifications.service";
import { AuthService } from "./../auth.service";
import { Register } from "./../../shared/classes/register";
import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  register: Register = new Register();
  confirmPassword: string;
  constructor(
    public dialogRef: MatDialogRef<RegisterComponent>,
    private auth: AuthService,
    private notifications: NotificationsService
  ) {}

  ngOnInit() {}

  onSubmit(form: any) {
    const registerForm: Register = form.value;
    this.auth.register(registerForm).subscribe(
      (res: any) => {
        console.log(res);
        this.notifications.show(res.msg, undefined, "success");
        this.dialogRef.close();
      },
      (e: HttpErrorResponse) => {
        this.notifications.show(e.error, undefined, "danger");
        form.resetForm();
      }
    );
  }
}
