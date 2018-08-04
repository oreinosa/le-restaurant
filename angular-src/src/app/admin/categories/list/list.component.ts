import { Component } from "@angular/core";
import { CategoriesService } from "../categories.service";
import { Category } from "../../../shared/classes/category";
import { Router } from "@angular/router";
import { List } from "../../../shared/classes/list";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss", "../../styles/crud.scss", "../../styles/list.scss"]
})

export class ListComponent extends List<Category> {
  constructor(
    public service: CategoriesService,
    public router: Router,
  ) {
    super(
      service,
      router,
      ["name", "description", "actions"]
    );
  }
}
