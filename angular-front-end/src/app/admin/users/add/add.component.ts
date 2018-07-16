import { NotificationsService } from './../../../notifications/notifications.service';
import { AuthService } from './../../../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { SignUp } from '../../../shared/classes/sign-up';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  user = new SignUp();
  constructor(
    private auth: AuthService,
    private notifications: NotificationsService
  ) { }

  ngOnInit() {
  }

  onSubmit(form: any) {
    const user: SignUp = form.value;
    console.log(user);
    this.auth
      .signUp(user)
      .subscribe(
        (res: any) => {
          console.log(res);
          if (res.success) {
            this.notifications.show(res.msg, 'Users', 'success');
          } else {
            this.notifications.show(res.msg, 'Users', 'danger');
          }
          form.resetForm();
        },
        (e) => console.log(e));
  }

}
