import { NotificationsService } from './../../notifications/notifications.service';
import { AuthService } from './../auth.service';
import { SignUp } from './../../shared/classes/sign-up';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  signUp: SignUp = new SignUp();
  constructor(
    public dialogRef: MatDialogRef<RegisterComponent>,
    private auth: AuthService,
    private notifications: NotificationsService
  ) { }

  ngOnInit() {
  }

  onSubmit(form: any) {
    const signUp: SignUp = form.value;
    this.auth.signUp(signUp)
      .subscribe(
        (res: any) => {
          console.log(res);
          if (res.success) {
            this.notifications.show(res.msg, undefined, 'success');
            this.dialogRef.close();
          } else {
            this.notifications.show(res.msg, undefined, 'danger');
            form.resetForm();
          }
        },
        (e) => console.log(e));
  }

}
