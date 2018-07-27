import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product } from "../../shared/classes/product";
import { DAO } from "../../shared/classes/dao";
@Injectable({
  providedIn: "root"
})
export class ProductsService extends DAO<Product> {
  constructor(httpClient: HttpClient) {
    super(httpClient, "products", "product", "Products");
  }
}
