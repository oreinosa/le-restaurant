import { Router, ActivatedRoute } from "@angular/router";
import { OnInit, OnDestroy } from "@angular/core";
import { map, tap, filter, takeUntil, switchMap } from "rxjs/operators";
import { NotificationsService } from "../../notifications/notifications.service";
import { HttpErrorResponse } from "@angular/common/http";
import { Subject } from "rxjs";
import { DAO } from "./dao";

export class Delete<T> implements OnInit, OnDestroy {
  private ngUnsubscribe = new Subject();
  object: T;
  constructor(
    public service: DAO<T>,
    public notifications: NotificationsService,
    public router: Router,
    public route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap
      .pipe(
        takeUntil(this.ngUnsubscribe),
        map(params => params.get("_id")),
        tap(
          _id =>
            !!_id
              ? false
              : this.router.navigate(["../"], { relativeTo: this.route })
        ),
        filter(_id => !!_id),
        switchMap(_id => this.service.isObjectSelected()
          ? this.service.getSelectedObject()
          : this.service.one(_id)),
        takeUntil(this.ngUnsubscribe)
      )
      .subscribe(object => this.object = object);
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  onSubmit() {
    this.service.delete(this.object["_id"]).subscribe(
      () => {
        this.notifications.show(
          `Deleted ${this.service.className} successfully`,
          this.service.collectionName,
          "success"
        );
      },
      (e: HttpErrorResponse) => {
        this.notifications.show(e.error, this.service.collectionName, "danger");
      },
      () => this.router.navigate(["../../"], { relativeTo: this.route })
    );
  }
}
