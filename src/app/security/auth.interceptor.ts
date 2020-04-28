import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable, Injector } from "@angular/core";
import { LoginService } from "./login/login.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private injector: Injector) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const loginService = this.injector.get(LoginService);
        if (loginService.isUserLoggedIn()) {
            const authRequest = request.clone( // 'clone' method is necessary because the original request is immutable
                {setHeaders: {'Authorization': `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJydXN3ZWxAZW1haWwuY29tIiwicm9sZSI6IlJPTEVfVVNFUiIsImNyZWF0ZWQiOjE1ODgwNjIxMTYwMzksImV4cCI6MTU4ODY2NjkxNn0.fGM4MOp378sWDLekiATM_eUOq3kyu4IbpY-dWgOJrkvz56WZvGY96lEeumVFEMLyVlIaU-BpJHznLwrv2M17iA`}});
            return next.handle(authRequest)
        } else {
            return next.handle(request);
        }
    }
}
