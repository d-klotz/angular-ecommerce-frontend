import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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
    let params: HttpParams = new HttpParams().append('category', selectedCategory);
    return this.http.get<Product[]>(`${BASE_URL}/api/product`, {
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJydXN3ZWxAZW1haWwuY29tIiwicm9sZSI6IlJPTEVfVVNFUiIsImNyZWF0ZWQiOjE1ODc4MDMwNTU3NTMsImV4cCI6MTU4ODQwNzg1NX0.ytUMXLdPFttiNaf_VsccwcvHWNMoqihuDasF0FvUGOSGVZ0obw1w8yL5pnyAbJmAs7l3QlEAITZCLmFh3x6VIg'
      },
      params
    });
  }
}
