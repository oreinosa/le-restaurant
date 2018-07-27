import { Component } from "@angular/core";
import { Product } from "../../../shared/classes/product";
import { Router, ActivatedRoute } from "@angular/router";
import { ProductsService } from "../products.service";
import { map, filter, tap, switchMap, takeUntil } from "rxjs/operators";
import { Subject } from "rxjs";
import { NgForm } from "@angular/forms";
import { NotificationsService } from "./../../../notifications/notifications.service";
import { HttpErrorResponse } from "@angular/common/http";
import { Update } from "../../../shared/classes/update";

@Component({
  selector: "app-update",
  templateUrl: "./update.component.html",
  styleUrls: ["./update.component.scss"]
})
export class UpdateComponent extends Update<Product> {
  constructor(
    service: ProductsService,
    notifications: NotificationsService,
    router: Router,
    route: ActivatedRoute
  ) {
    super(service, notifications, router, route);
  }
}
