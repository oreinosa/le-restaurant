import { MatTableDataSource } from '@angular/material';
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
import { FormControl, NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Item } from '../../../shared/classes/item';
@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["../../styles/crud.scss", "../../styles/list.scss", "./create.component.scss"]
})
export class CreateComponent extends Create<Combo> {
  combo = new Combo();

  allProducts: Product[];
  allProductsByCategory: Product[];
  filteredProducts: Observable<Product[]>;
  productCtrl = new FormControl();

  amountCtrl = new FormControl(1);
  priceCtrl = new FormControl(0);
  items: Item[] = [
    {
      "product": {
        "name": "Heineken",
        "_id": "5b65388ff3ccc6324456faf6",
        "cost": 1.5
      },
      "amount": 1
    },
    {
      "product": {
        "name": "Porción de queso",
        "_id": "5b5c08165f08942670db419c",
        "cost": 0.2
      },
      "amount": 1
    },
    {
      "product": {
        "name": "Tacos",
        "_id": "5b654837e96c593a18406e28",
        "cost": 1
      },
      "amount": 1
    },
    {
      "product": {
        "_id": "5b5bf8c0d2d40213c0b0cf66",
        "name": "Pilsener (330ml)",
        "cost": 0.5
      },
      "amount": 1
    },
    {
      "product": {
        "_id": "5b5bf8c0d2d40213c0b0cf66",
        "name": "Pilsener (330ml)",
        "cost": 0.5
      },
      "amount": 2
    },
    {
      "product": {
        "_id": "5b5bf8c0d2d40213c0b0cf66",
        "name": "Pilsener (330ml)",
        "cost": 0.5
      },
      "amount": 1
    },
    {
      "product": {
        "_id": "5b5bf8c0d2d40213c0b0cf66",
        "name": "Pilsener (330ml)",
        "cost": 0.5
      },
      "amount": 1
    },
    {
      "product": {
        "_id": "5b5c0c1fd23a8d33e8b84316",
        "name": "Golden (330ml)\t",
        "cost": 0.5
      },
      "amount": 3
    },
    {
      "product": {
        "_id": "5b5c08165f08942670db419c",
        "name": "Porción de queso",
        "cost": 0.2
      },
      "amount": 1
    },
    {
      "product": {
        "_id": "5b65388ff3ccc6324456faf6",
        "name": "Heineken",
        "cost": 1.5
      },
      "amount": 2
    }
  ];
  itemsSource: MatTableDataSource<Item> = new MatTableDataSource(this.items);

  allCategories: Category[];
  filteredCategories: Observable<Category[]>;
  categoryCtrl = new FormControl({ name: "All" });

  displayedColumns = ["name", "cost", "amount", "subtotal", "actions"];

  subtotal = 0;
  tax = 0;
  total = 0;

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
    this.calculate();

    this.productsService
      .all().pipe(
        map(products => products.map(product => {
          const {
            name,
            _id,
            cost,
            price,
            category,
            imageURL
          } = product;
          return {
            name,
            _id,
            cost,
            price,
            category,
            imageURL
          } as Product;
        })),
        tap(products => {
          console.log('Products : ', products);
          this.allProducts = products.slice();
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
    return this.allProductsByCategory.filter(product => product.name.toLowerCase().includes(filterValue)).slice();
  }

  filterProductsByCategory(category: string): void {
    const filterValue = category.toLowerCase();
    if (filterValue === "all") {
      this.allProductsByCategory = this.allProducts.slice();
    } else {
      this.allProductsByCategory = this.allProducts.filter(product => product.category.name.toLowerCase() === filterValue).slice();
    }
    this.productCtrl.reset("");
  }

  displayProductFn(product: Product): string {
    return product ? product.name : "";
  }

  addItem(selectedProduct: Product, amount: number): void {
    const product = {
      _id: selectedProduct._id,
      name: selectedProduct.name,
      cost: selectedProduct.cost
    };
    this.items.push({ product, amount });
    this.itemsSource.data = this.items;
    this.productCtrl.reset("");
    this.calculate();
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
    this.itemsSource.data = this.items;
    this.calculate();
  }

  calculate() {
    let subtotal = 0;
    for (const item of this.items) {
      subtotal += (item.amount * item.product.cost);
    }
    this.subtotal = subtotal;
    this.tax = this.subtotal * 0.1;
    this.total = this.subtotal + this.tax;
  }

  onSubmit(form: NgForm) {
    const price = this.priceCtrl.value;
    const items = this.items.slice();
    const combo = { price, items };
    return this.combosService.create(combo).subscribe(
      (res) => console.log(res),
      (error) => console.log(error)
    )
  }
}
