import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, NavigationEnd } from '@angular/router';

import { Observable } from "rxjs";
import { tap, filter } from "rxjs/operators";

import { User } from 'src/app/models/User';
import { ApiResponse } from 'src/app/models/ApiResponse';
import { BASE_URL } from '../app.api';
import { Customer } from '../models/Customer';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _user: User;
  lastUrl: string;

  get user(): User {
    const user: User = {
      email: localStorage.getItem('userEmail'),
      token: localStorage.getItem('userToken')
    }
    this._user = user;
    return user;
  }

  set user(user) {
    localStorage.setItem('userEmail', user.email),
    localStorage.setItem('userToken', user.token),
    this._user = user;
  }

  constructor(private http: HttpClient, private router: Router) {
      this.router.events.pipe(filter(e => e instanceof NavigationEnd))
                      .subscribe((e: NavigationEnd) => this.lastUrl = e.url);
   }

  isUserLoggedIn(): boolean {
    console.log(this.user)
    return this.user.email !== null || this.user.token !== null;
  }

  login(email: string, password: string): Observable<ApiResponse<User>> {
      return this.http.post<ApiResponse<User>>(`${BASE_URL}/auth`,
                          {email: email, password: password})
                      .pipe(tap(res => this.user = res.data));
  }

  handleLogin(path: string = this.lastUrl) {
      this.router.navigate(['/login', btoa(path)]);
  }

  logout() {
      this.user = undefined;
  }

  updateLoginUser(user: User) {
      this.user = user;
  }

  createCustomer(customer: Customer): Observable<ApiResponse<Customer>> {
    return this.http.post<ApiResponse<Customer>>(`${BASE_URL}/api/customer`, customer);
  }

  getUserByToken(): Observable<ApiResponse<Customer>> {
    return this.http.get<ApiResponse<Customer>>(`${BASE_URL}/api/customer`);
  }
}
