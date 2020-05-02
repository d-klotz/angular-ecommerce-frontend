import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, NavigationEnd } from '@angular/router';

import { Observable } from "rxjs";
import { tap, filter } from "rxjs/operators";

import { User } from 'src/app/models/User';
import { ApiResponse } from 'src/app/models/ApiResponse';
import { BASE_URL } from '../app.api';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  user: User;
  lastUrl: string;

  constructor(private http: HttpClient, private router: Router) {
      this.router.events.pipe(filter(e => e instanceof NavigationEnd))
                      .subscribe((e: NavigationEnd) => this.lastUrl = e.url);
   }

  isUserLoggedIn(): boolean {
    return this.user !== undefined;
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
}
