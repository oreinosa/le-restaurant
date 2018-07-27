import { map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HOST } from '../../shared/host';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../../shared/classes/product';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private api = HOST + 'products/';
  private selectedProductSubject = new BehaviorSubject<Product>(null);
  products = new BehaviorSubject<Product[]>([]);
  constructor(
    private http: HttpClient
  ) {
  }

  getSelectedProduct(): Observable<Product> {
    return this.selectedProductSubject.asObservable();
  }

  setSelectedProduct(product: Product): void {
    return this.selectedProductSubject.next(product);
  }

  isProductSelected(): boolean {
    return !!this.selectedProductSubject.getValue();
  }

  getProducts() {
    return this.http.get<any>(this.api)
      .pipe(
        map(res => {
          return res.data as Product[];
        }),
        tap(products => {
          this.products.next(products);
        })
      );
  }

  getProduct(productname: string) {
    return this.http.get<any>(this.api + productname)
      .pipe(
        map(res => {
          return res.data as Product;
        })
      );
  }

  addProduct(product: Product) {
    return this.http.post<any>(this.api, product)
      .pipe(
        map(res => {
          return res.data as Product;
        }),
        tap(product => {
          const products = this.products.getValue().slice();
          products.push(product);
          this.products.next(products);
        })
      );
  }

  editProduct(_id: string, product: Product) {
    return this.http.put<any>(this.api + _id, product)
      .pipe(
        map(res => {
          return res.data as Product;
        }),
        tap(product => {
          const products = this.products.getValue().slice();
          const index = products.findIndex(_product => _product._id === product._id);
          products[index] = product;
          this.products.next(products);
        })
      );
  }

  deleteProduct(_id: string) {
    return this.http.delete(this.api + _id).pipe(
      tap(() => {
        const products = this.products.getValue().slice();
        const index = products.findIndex(_product => _product._id === _id);
        products.splice(index, 1);
        this.products.next(products);
      })
    );
  }
}
