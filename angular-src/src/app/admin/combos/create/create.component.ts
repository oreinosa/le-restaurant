import { CategoriesService } from './../../categories/categories.service';
import { map, startWith, tap } from 'rxjs/operators';
import { ProductsService } from './../../products/products.service';
import { CombosService } from "./../combos.service";
import { Router, ActivatedRoute } from "@angular/router";
import { NotificationsService } from "./../../../notifications/notifications.service";
import { Component } from "@angular/core";
import { Combo } from "../../../shared/classes/combo";
import { Create } from "../../../shared/classes/create";
import { Product } from "../../../shared/classes/product";
import { Category } from '../../../shared/classes/category';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.scss", "../../styles/crud.scss"]
})
export class CreateComponent extends Create<Combo> {
  combo = new Combo();

  allProducts: Product[];
  allProductsByCategory: Product[];
  filteredProducts: Observable<Product[]>;
  productCtrl = new FormControl();

  addedProducts: Product[] = [];

  allCategories: Category[];
  filteredCategories: Observable<Category[]>;
  categoryCtrl = new FormControl({ name: "All" });

  constructor(
    public combosService: CombosService,
    public router: Router,
    public route: ActivatedRoute,
    public notifications: NotificationsService,
    private productsService: ProductsService,
    private categoriesService: CategoriesService
  ) {
    super(combosService, notifications, router, route);
  }

  ngOnInit() {
    this.productsService
      .all().pipe(
        map(products => products.map(product => {
          return {
            name: product.name,
            _id: product._id,
            price: product.price,
            category: product.category
          } as Product;
        })),
        tap(products => {
          console.log('Products : ', products);
          this.allProducts = products;
        })
      )
      .subscribe(() => this.filterProductsByCategory('all'));

    this.filteredProducts = this.productCtrl.valueChanges
      .pipe(
        startWith(''),
        map((value: any) => value instanceof Object ? value.name : value),
        map(value => this.filterProducts(value)),
      // tap(products => console.log('Filtered :', products))
    );

    this.categoriesService
      .all().pipe(
        map(categories => categories.concat([{ name: "All" }])),
        map(categories => categories.map(category => {
          return {
            name: category.name,
            _id: category._id,
          } as Category;
        })),
        tap(categories => console.log('Categories : ', categories))
      )
      .subscribe(categories => this.allCategories = categories);


    this.filteredCategories = this.categoryCtrl.valueChanges
      .pipe(
        startWith(''),
        map((value: any) => value instanceof Object ? value.name : value),
        map(value => this.filterCategories(value)),
      // tap(categories => console.log('Filtered :', categories))
    );

  }

  private filterCategories(value: string): Category[] {
    const filterValue = value.toLowerCase();
    return this.allCategories.filter(category => category.name.toLowerCase().includes(filterValue));
  }

  displayCategoryFn(category: Category): string {
    return category ? category.name : "";
  }

  private filterProducts(value: string): Product[] {
    const filterValue = value.toLowerCase();
    return this.allProductsByCategory.filter(product => product.name.toLowerCase().includes(filterValue));
  }

  filterProductsByCategory(category: string): void {
    const filterValue = category.toLowerCase();
    if (filterValue === "all") {
      this.allProductsByCategory = this.allProducts.slice();
    } else {
      this.allProductsByCategory = this.allProducts.filter(product => product.category.name.toLowerCase() === filterValue);
    }
    this.productCtrl.setValue("");
  }

  displayProductFn(product: Product): string {
    return product ? product.name : "";
  }

  addProduct(product: Product): void {
    this.addedProducts.push(product);
  }
}
