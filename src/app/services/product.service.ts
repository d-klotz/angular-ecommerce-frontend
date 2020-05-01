import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from '../app.api';
import { Product } from '../models/Product';
import { Observable } from 'rxjs';
import { Category } from '../models/Category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducstByCategory(selectedCategory: Category): Observable<Product[]> {
    return this.http.get<Product[]>(`${BASE_URL}/api/product/category/${selectedCategory}`);
  }

  getProducstById(id: number): Observable<Product> {
    return this.http.get<Product>(`${BASE_URL}/api/product/${id}`);
  }
}
