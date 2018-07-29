import { CategoriesService } from './../../categories/categories.service';
import { Component } from "@angular/core";
import { Product } from "../../../shared/classes/product";
import { Router, ActivatedRoute } from "@angular/router";
import { ProductsService } from "../products.service";
import { map } from "rxjs/operators";
import { NotificationsService } from "./../../../notifications/notifications.service";
import { Update } from "../../../shared/classes/update";
import { Category } from "../../../shared/classes/category";
import { NgForm } from '@angular/forms';

@Component({
  selector: "app-update",
  templateUrl: "./update.component.html",
  styleUrls: ["./update.component.scss"]
})
export class UpdateComponent extends Update<Product> {
  categories: Category[];
  constructor(
    public service: ProductsService,
    public notifications: NotificationsService,
    public router: Router,
    public route: ActivatedRoute,
    private categoriesService: CategoriesService
  ) {
    super(service, notifications, router, route);
  }

  ngOnInit() {
    super.ngOnInit();
    this.categoriesService
      .all().pipe(
        map(categories => categories.map(category => { return { name: category.name, _id: category._id } as Category }))
      )
      .subscribe((categories: Category[]) => this.categories = categories);
  }

  compareCategoryFn(a: Category, b: Category): boolean {
    if (a && b) {
      return a._id === b._id;
    }
    return false;
  }

  onSubmit(form: NgForm) {
    const productBefore: Product = this.object;
    const productAfter: Product = form.value;
    console.log('before ', productBefore);
    console.log('after ', productAfter);
    // if (productBefore.imageURL === productAfter.imageURL)
    // productBefore.name === productAfter.name super.onSubmit(form);
  }
}
