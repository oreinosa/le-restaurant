import { ProductsService } from "./../products.service";
import { Router, ActivatedRoute } from "@angular/router";
import { NotificationsService } from "./../../../notifications/notifications.service";
import { Component } from "@angular/core";
import { Product } from "../../../shared/classes/product";
import { Create } from "../../../shared/classes/create";
@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.scss"]
})
export class CreateComponent extends Create<Product> {
  product = new Product();
  roles = ["Customer", "Admin"];
  constructor(
    productsService: ProductsService,
    router: Router,
    route: ActivatedRoute,
    notifications: NotificationsService
  ) {
    super(productsService, notifications, router, route);
  }
}
