import { Injectable } from '@angular/core';
import { Category } from '../models/Category';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {
  private category: Category = Category.MACBOOKS;
  private categorySubject$ = new BehaviorSubject<Category>(this.category);
  categoryChanged$ = this.categorySubject$.asObservable();
  private product: Product;
  private productToCartSubject$ = new BehaviorSubject<Product>(this.product);
  productToCartChanged$ = this.productToCartSubject$.asObservable();

  constructor() { }

  changeCategory(category: Category) {
    this.category = category;
    this.categorySubject$.next(category);
  }

  addProductToCart(product: Product) {
    this.product = product;
    this.productToCartSubject$.next(product);
  }
}
