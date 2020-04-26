import { Injectable } from '@angular/core';
import { User } from 'src/app/models/User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

    user: User;
    lastUrl: string;

    isUserLoggedIn(): boolean {
      // return this.user !== undefined;
      return true;
  }
}
