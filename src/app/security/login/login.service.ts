import { Injectable } from '@angular/core';
import { Token } from 'src/app/models/Token';
import { HttpClient } from '@angular/common/http';
import { Router, NavigationEnd } from '@angular/router';

import { Observable } from "rxjs";
import { tap, filter } from "rxjs/operators";

import { BASE_URL } from "../../app.api";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  token: Token;
  lastUrl: string;

  constructor(private http: HttpClient, private router: Router) {
      this.router.events.pipe(filter(e => e instanceof NavigationEnd))
                      .subscribe((e: NavigationEnd) => this.lastUrl = e.url);
   }

  isUserLoggedIn(): boolean {
    return this.token !== undefined;
  }

  login(email: string, password: string): Observable<Token> {
      return this.http.post<Token>(`${BASE_URL}/auth`,
                          {email: email, password: password})
                      .pipe(tap(token => this.token = token));
  }

  handleLogin(path: string = this.lastUrl) {
      this.router.navigate(['/login', btoa(path)]);
  }

  logout() {
      this.token = undefined;
  }

  updateLoginUser(token: Token) {
      this.token = token;
  }
}
