import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Category } from "../../shared/classes/category";
import { DAO } from "../../shared/classes/dao";
@Injectable({
  providedIn: "root"
})
export class CategoriesService extends DAO<Category> {
  constructor(httpClient: HttpClient) {
    super(httpClient, "categories", "category", "Categories");
  }
}
