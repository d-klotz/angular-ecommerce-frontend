import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../models/Customer';
import { BASE_URL } from '../app.api';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customer: Customer;

  constructor(private http: HttpClient) { }

  getCustomer() {
    return this.http.get<Customer>(`${BASE_URL}/customer`).pipe(tap(customer => this.customer = customer));
  }
}
