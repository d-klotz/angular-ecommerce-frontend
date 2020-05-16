import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../models/Order';
import { BASE_URL } from '../app.api';
import { ProductQuantity } from '../models/ProductQuantity';
import { ApiResponse } from '../models/ApiResponse';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private _productQuantity: ProductQuantity[];

  constructor(
    private http: HttpClient) { }

  createOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(`${BASE_URL}/api/order`, order);
  }

  public getProductsToCheckout() {
    return this._productQuantity
  }

  public setProductsToCheckout(productQuantityObj: any) {
    const productQuantityList: ProductQuantity[] = [];
    Object.keys(productQuantityObj).forEach(key => {
      const productQuantity = new ProductQuantity(key, productQuantityObj[key]);
      productQuantityList.push(productQuantity)
    });
    this._productQuantity = productQuantityList;
  }

  public getOrdersByUser(): Observable<ApiResponse<Order[]>> {
    return this.http.get<ApiResponse<Order[]>>(`${BASE_URL}/api/order`);
  }

  public getOrderById(orderId: number): Observable<ApiResponse<Order>> {
    return this.http.get<ApiResponse<Order>>(`${BASE_URL}/api/order/${orderId}`)
  }
}
