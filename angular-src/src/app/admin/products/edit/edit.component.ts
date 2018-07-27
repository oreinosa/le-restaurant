import { Component, OnInit } from "@angular/core";
import { Product } from "../../../shared/classes/product";
import { Router, ActivatedRoute } from "@angular/router";
import { ProductsService } from "../products.service";
import { map, filter, tap, switchMap, takeUntil } from "rxjs/operators";
import { Subject } from "rxjs";
import { NgForm } from "@angular/forms";
import { NotificationsService } from './../../../notifications/notifications.service';
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.scss"]
})
export class EditComponent implements OnInit {
  private ngUnsubscribe = new Subject();
  product: Product;
  _id: string;
  roles = [
    "Customer",
    "Admin"
  ];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private notifications: NotificationsService
  ) { }

  ngOnInit() {
    this.route.paramMap
      .pipe(
        map(params => params.get('_id')),
        tap(_id => {
          this._id = _id;
          _id != null && !!(_id as string) ? false : this.router.navigate(['../'], { relativeTo: this.route });
        }),
        filter(_id => !!_id),
        switchMap(
          _id =>
            this.productsService.isProductSelected()
              ? this.productsService.getSelectedProduct()
              : this.productsService.getProduct(_id)
        ),
        takeUntil(this.ngUnsubscribe),
        // tap(product => console.log(product))
      )
      .subscribe(product => this.product = product);
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  onSubmit(form: NgForm) {
    const product: Product = form.value;
    this.productsService.editProduct(this._id, product).subscribe(
      (product: Product) => {
        this.notifications.show(
          `Edited product (ID: ${product._id}`,
          "Products",
          "success"
        );
        this.router.navigate(['../../'], { relativeTo: this.route });
      },
      (e: HttpErrorResponse) => {
        this.notifications.show(
          e.error,
          "Products",
          "danger"
        );
        form.resetForm(product);
      });
  }
}
