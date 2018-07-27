import { UsersService } from './../users.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { map, tap, filter, takeUntil } from 'rxjs/operators';
import { NotificationsService } from '../../../notifications/notifications.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
  private ngUnsubscribe = new Subject();
  username: string
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private usersService: UsersService,
    private notifications: NotificationsService
  ) { }

  ngOnInit() {
    this.route
      .paramMap.pipe(
        takeUntil(this.ngUnsubscribe),
        map(params => params.get('username')),
        // tap(username => !!username ? false : this.router.navigate(['../'], { relativeTo: this.route })),
        filter(username => !!username))
      .subscribe(username => this.username = username);
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  onSubmit() {
    this.usersService.deleteUser(this.username)
      .subscribe(
        (res: any) => {
          this.notifications.show('User deleted successfully', 'Users', 'success');
        },
        (e: HttpErrorResponse) => {
          this.notifications.show(e.error, 'Users', 'danger');
        },
        () => this.router.navigate(['../../'], { relativeTo: this.route }));
  }

}
