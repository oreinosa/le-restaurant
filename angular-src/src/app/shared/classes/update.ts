import { OnInit, OnDestroy } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { map, filter, tap, switchMap, takeUntil } from "rxjs/operators";
import { Subject } from "rxjs";
import { NgForm } from "@angular/forms";
import { NotificationsService } from "./../../notifications/notifications.service";
import { HttpErrorResponse } from "@angular/common/http";
import { DAO } from "./dao";

export class Update<T> implements OnInit, OnDestroy {
  private ngUnsubscribe = new Subject();
  product: T;
  _id: string;
  constructor(
    private service: DAO<T>,
    private notifications: NotificationsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(
        map(params => params.get("_id")),
        tap(_id => {
          this._id = _id;
          if (_id === null || !(_id as string)) {
            this.router.navigate(["../"], { relativeTo: this.route });
          }
        }),
        filter(_id => !!_id),
        switchMap(
          _id =>
            this.service.isObjectSelected()
              ? this.service.getSelectedObject()
              : this.service.one(_id)
        ),
        takeUntil(this.ngUnsubscribe)
        // tap(product => console.log(product))
      )
      .subscribe(product => (this.product = product));
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  onSubmit(form: NgForm) {
    const product: T = form.value;
    this.service.update(this._id, product).subscribe(
      (editedObject: T) => {
        this.notifications.show(
          `Edited ${this.service.className} (ID: ${editedObject["_id"]}`,
          this.service.collectionName,
          "success"
        );
        this.router.navigate(["../../"], { relativeTo: this.route });
      },
      (e: HttpErrorResponse) => {
        this.notifications.show(e.error, this.service.collectionName, "danger");
        form.resetForm(product);
      }
    );
  }
}
