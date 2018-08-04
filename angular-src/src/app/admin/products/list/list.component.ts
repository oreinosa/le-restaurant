import { Component } from "@angular/core";
import { ProductsService } from "../products.service";
import { Product } from "../../../shared/classes/product";
import { Router } from "@angular/router";
import { List } from "../../../shared/classes/list";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss", "../../styles/crud.scss", "../../styles/list.scss"]
})
export class ListComponent extends List<Product> {
  constructor(
    public service: ProductsService,
    public router: Router,
  ) {
    super(
      service,
      router,
      ["name", "price", "cost", "category", "imageURL", "actions"]
    );
  }
}
