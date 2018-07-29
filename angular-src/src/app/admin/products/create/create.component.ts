import { UploadComponent } from './../../../upload/upload.component';
import { map } from 'rxjs/operators';
import { Router, ActivatedRoute } from "@angular/router";
import { Component, OnInit, ViewChild } from "@angular/core";
import { CategoriesService } from './../../categories/categories.service';
import { ProductsService } from "./../products.service";
import { NotificationsService } from "./../../../notifications/notifications.service";
import { Product } from "../../../shared/classes/product";
import { Category } from './../../../shared/classes/category';
import { Create } from "../../../shared/classes/create";
import { NgForm } from '@angular/forms';

@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.scss"]
})
export class CreateComponent extends Create<Product> implements OnInit {
  @ViewChild(UploadComponent) upload: UploadComponent;
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

  onSubmit(form: NgForm) {
    this.upload
      .onSubmit('products', this.product.name)
      .subscribe(
        (a: any) => console.log(a),
        (e) => console.log(e)
      );
  }

}
