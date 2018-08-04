import { CategoriesService } from "./../categories.service";
import { Router, ActivatedRoute } from "@angular/router";
import { NotificationsService } from "./../../../notifications/notifications.service";
import { Component } from "@angular/core";
import { Category } from "../../../shared/classes/category";
import { Create } from "../../../shared/classes/create";
@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.scss", "../../styles/crud.scss"]
})
export class CreateComponent extends Create<Category> {
  category = new Category();
  constructor(
    public categoriesService: CategoriesService,
    public router: Router,
    public route: ActivatedRoute,
    public notifications: NotificationsService
  ) {
    super(categoriesService, notifications, router, route);
  }
}
