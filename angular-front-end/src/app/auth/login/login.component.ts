import { NotificationsService } from './../../notifications/notifications.service';
import { AuthService } from './../auth.service';
import { SignIn } from './../../shared/classes/sign-in';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  signIn: SignIn;
  constructor(
    public dialogRef: MatDialogRef<LoginComponent>,
    private auth: AuthService,
    private notifications: NotificationsService
  ) { }

  ngOnInit() {
    this.signIn = new SignIn();
  }

  onSubmit(form: any) {
    const signIn: SignIn = form.value;
    this.auth
      .signIn(signIn)
      .subscribe(
        (res: any) => {
          console.log(res);
          if (res.success) {
            this.auth.updateUserData(res.user, res.token);
            this.notifications.show(`Hello ${res.user.name}!`, undefined, 'success');
            this.dialogRef.close({
              user: res.user
            });
          } else {
            this.notifications.show(`${res.msg}`, undefined, 'danger');
            form.resetForm();
          }
        },
        (e) => console.log(e));
  }

}
