import { Injectable } from '@angular/core';
import { Category } from '../models/Category';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {
  private category: Category = Category.MACBOOKS;
  private categorySubject$ = new BehaviorSubject<Category>(this.category);
  categoryChanged$ = this.categorySubject$.asObservable();

  constructor() { }

  changeCategory(category: Category) {
    this.category = category;
    this.categorySubject$.next(category);
  }
}
