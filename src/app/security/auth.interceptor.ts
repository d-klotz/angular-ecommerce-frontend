import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable, Injector } from "@angular/core";
import { LoginService } from '../services/login.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private injector: Injector) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const loginService = this.injector.get(LoginService);
        if (loginService.isUserLoggedIn()) {
            const authRequest = request.clone( // 'clone' method is necessary because the original request is immutable
                {setHeaders: {'Authorization': `Bearer ${loginService.user.token}`}});
            return next.handle(authRequest)
        } else {
            return next.handle(request);
        }
    }
}
