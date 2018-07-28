import { map } from 'rxjs/operators';
import { Router, ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { CategoriesService } from './../../categories/categories.service';
import { ProductsService } from "./../products.service";
import { NotificationsService } from "./../../../notifications/notifications.service";
import { Product } from "../../../shared/classes/product";
import { Category } from './../../../shared/classes/category';
import { Create } from "../../../shared/classes/create";

@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.scss"]
})
export class CreateComponent extends Create<Product> implements OnInit {
  product = new Product();
  categories: Category[];
  constructor(
    public productsService: ProductsService,
    public router: Router,
    public route: ActivatedRoute,
    public notifications: NotificationsService,
    private categoriesService: CategoriesService
  ) {
    super(productsService, notifications, router, route);
  }

  ngOnInit() {
    this.categoriesService
      .all().pipe(
        map(categories => categories.map(category => { return { name: category.name, _id: category._id } as Category }))
      )
      .subscribe((categories: Category[]) => this.categories = categories);
  }

}
