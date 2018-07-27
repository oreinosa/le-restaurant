import { Router, ActivatedRoute } from "@angular/router";
import { NotificationsService } from "./../../notifications/notifications.service";
import { NgForm } from "@angular/forms";
import { HttpErrorResponse } from "@angular/common/http";
import { DAO } from "./dao";

export class Create<T> {
  constructor(
    private service: DAO<T>,
    private notifications: NotificationsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  onSubmit(form: NgForm) {
    const product: T = form.value;
    this.service.create(product).subscribe(
      (addedObject: T) => {
        // console.log(product);
        this.notifications.show(
          `Added ${this.service.className} (ID: ${addedObject["_id"]}`,
          this.service.collectionName,
          "success"
        );
        this.router.navigate(["../"], { relativeTo: this.route });
      },
      (e: HttpErrorResponse) => {
        console.log(e.error);
        this.notifications.show(e.error, this.service.collectionName, "danger");
        form.resetForm();
      }
    );
  }
}
