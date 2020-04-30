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

  private product: Product = undefined;
  private productToCartSubject$ = new BehaviorSubject<Product>(this.product);
  productToCartChanged$ = this.productToCartSubject$.asObservable();

  private isSidebarOpen: boolean = false;
  private isSidebarOpenSubject$ = new BehaviorSubject<boolean>(this.isSidebarOpen);
  isSidebarOpenChanged$ = this.isSidebarOpenSubject$.asObservable();

  constructor() { }

  public changeCategory(category: Category) {
    this.category = category;
    this.categorySubject$.next(category);
  }

  public addProductToCart(product: Product) {
    this.product = product;
    this.productToCartSubject$.next(product);
  }

  public handleSidebarOpenClose(status: boolean) {
    this.isSidebarOpen = status;
    this.isSidebarOpenSubject$.next(status);
  }
}
