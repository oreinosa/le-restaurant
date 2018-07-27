import { ProductsService } from "./../products.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Component } from "@angular/core";
import { NotificationsService } from "../../../notifications/notifications.service";
import { Delete } from "../../../shared/classes/delete";
import { Product } from "../../../shared/classes/product";

@Component({
  selector: "app-delete",
  templateUrl: "./delete.component.html",
  styleUrls: ["./delete.component.scss"]
})
export class DeleteComponent extends Delete<Product> {
  constructor(
    productsService: ProductsService,
    notifications: NotificationsService,
    router: Router,
    route: ActivatedRoute
  ) {
    super(productsService, notifications, router, route);
  }
}
