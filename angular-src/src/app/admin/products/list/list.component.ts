import { Component, OnInit, OnDestroy } from "@angular/core";
import { ProductsService } from "../products.service";
import { Product } from "../../../shared/classes/product";
import { Router } from "@angular/router";
import { switchMap, tap, takeUntil } from "rxjs/operators";
import { Subject } from "rxjs";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"]
})
export class ListComponent implements OnInit, OnDestroy {
  private ngUnsubscribe = new Subject();
  displayedColumns: string[] = ["id", "name", "price", "cost", "actions"];
  products: Product[];

  constructor(
    private productsService: ProductsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.productsService
      .all()
      .pipe(
        switchMap(() => this.productsService.objects),
        takeUntil(this.ngUnsubscribe),
        tap(products => console.log("Products : ", products))
      )
      .subscribe((products: Product[]) => (this.products = products));
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  onAction(action: string, product: Product) {
    let _id = "";
    if (product) {
      _id = product._id;
      this.productsService.setSelectedObject(product);
    }
    this.router.navigate(["admin", "products", action, _id]);
  }
}
