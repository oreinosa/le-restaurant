import { Component, OnInit, OnDestroy } from "@angular/core";
import { User } from "../../../shared/classes/user";
import { Router, ActivatedRoute } from "@angular/router";
import { UsersService } from "../users.service";
import { map, filter, tap, switchMap, takeUntil } from "rxjs/operators";
import { Subject } from "rxjs";
import { NgForm } from "@angular/forms";
import { NotificationsService } from './../../../notifications/notifications.service';
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: "app-update",
  templateUrl: "./update.component.html",
  styleUrls: ["./update.component.scss"]
})
export class UpdateComponent implements OnInit, OnDestroy {
  private ngUnsubscribe = new Subject();
  user: User;
  username: string;
  roles = [
    "Customer",
    "Admin"
  ];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private usersService: UsersService,
    private notifications: NotificationsService
  ) { }

  ngOnInit() {
    this.route.paramMap
      .pipe(
        map(params => params.get('username')),
        tap(username => {
          this.username = username;
          username != null && !!(username as string) ? false : this.router.navigate(['../'], { relativeTo: this.route });
        }),
        filter(username => !!username),
        switchMap(
          username =>
            this.usersService.isUserSelected()
              ? this.usersService.getSelectedUser()
              : this.usersService.getUser(username)
        ),
        takeUntil(this.ngUnsubscribe),
        // tap(user => console.log(user))
      )
      .subscribe(user => this.user = user);
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  onSubmit(form: NgForm) {
    const user: User = form.value;
    this.usersService.editUser(this.username, user).subscribe(
      (editedUser: User) => {
        this.notifications.show(
          `Edited user (ID: ${editedUser._id}`,
          "Users",
          "success"
        );
        this.router.navigate(['../../'], { relativeTo: this.route });
      },
      (e: HttpErrorResponse) => {
        this.notifications.show(
          e.error,
          "Users",
          "danger"
        );
        form.resetForm(user);
      });
  }
}
