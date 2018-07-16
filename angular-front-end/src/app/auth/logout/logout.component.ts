import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from '../auth.service';
import { NotificationsService } from '../../notifications/notifications.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<LogoutComponent>,
    private auth: AuthService,
    private notifications: NotificationsService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.auth
      .signOut()
      .subscribe(
        (res: any) => {
          console.log(res);
          if (res.success) {
            this.auth.updateUserData(null, null);
            this.notifications.show(`Good bye!`, undefined, 'success');
            this.dialogRef.close(true);
          } else {
            this.notifications.show(`${res.msg}`, undefined, 'danger');
          }
        },
        (e) => console.log(e));
  }

}
