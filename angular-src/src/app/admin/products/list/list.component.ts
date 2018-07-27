import { Component, OnInit } from "@angular/core";
import { ProductsService } from "../products.service";
import { Product } from "../../../shared/classes/product";
import { Router } from "@angular/router";
import { switchMap, tap } from "rxjs/operators";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"]
})
export class ListComponent implements OnInit {
  displayedColumns: string[] = [
    "id",
    "name",
    "price",
    "cost",
    "actions"
  ];
  products: Product[];

  constructor(private productsService: ProductsService, private router: Router) { }

  ngOnInit() {
    this.productsService
      .getProducts().pipe(
        switchMap(() => this.productsService.products),
        tap(products => console.log(products))
      )
      .subscribe((products: Product[]) => this.products = products);
  }

  onAction(action: string, product: Product) {
    let _id = "";
    if (product) {
      _id = product._id;
      this.productsService.setSelectedProduct(product);
    }
    this.router.navigate(["admin", "products", action, _id]);
  }
}
