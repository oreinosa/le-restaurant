import { CategoriesService } from "./../categories.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Component } from "@angular/core";
import { NotificationsService } from "../../../notifications/notifications.service";
import { Delete } from "../../../shared/classes/delete";
import { Category } from "../../../shared/classes/category";

@Component({
  selector: "app-delete",
  templateUrl: "./delete.component.html",
  styleUrls: ["./delete.component.scss"]
})
export class DeleteComponent extends Delete<Category> {
  constructor(
    public categoriesService: CategoriesService,
    public notifications: NotificationsService,
    public router: Router,
    public route: ActivatedRoute
  ) {
    super(categoriesService, notifications, router, route);
  }
}
