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
                {setHeaders: {'Authorization': `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJydXN3ZWxAZW1haWwuY29tIiwicm9sZSI6IlJPTEVfVVNFUiIsImNyZWF0ZWQiOjE1ODgwOTI3NTgxNDgsImV4cCI6MTU4ODY5NzU1OH0.XPif_qr8JfPwqVuEJ_RAyN2ITA-rjg7pIVUztI0-tW_lc7peINSdgSdOK_sU6-OGI7-aQzjsXKFUQSmBpPt4Lg`}});
            return next.handle(authRequest)
        } else {
            return next.handle(request);
        }
    }
}
