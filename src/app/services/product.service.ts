import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BASE_URL } from '../app.api';
import { Product } from '../models/Product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducstByCategory(): Observable<Product[]> {
    const headers: HttpHeaders = new HttpHeaders();
    headers.append('Authorization', 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJydXN3ZWxAZW1haWwuY29tIiwicm9sZSI6IlJPTEVfVVNFUiIsImNyZWF0ZWQiOjE1ODc3Mzc4MjUzNDYsImV4cCI6MTU4ODM0MjYyNX0.w6sdsIVcnCEYkbPMSaL_WosbdCXzxVwE6np47I364H8U_RW6e0MAjXwzsOKX6WhyMpLo0-AV-YCtwGrCXmxDwQ');
    return this.http.get<Product[]>(`${BASE_URL}/api/product/`, {
      headers: headers
    });
  }
}
