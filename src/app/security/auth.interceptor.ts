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
                {setHeaders: {'Authorization': `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJydXN3ZWxAZW1haWwuY29tIiwicm9sZSI6IlJPTEVfVVNFUiIsImNyZWF0ZWQiOjE1ODc4MDMwNTU3NTMsImV4cCI6MTU4ODQwNzg1NX0.ytUMXLdPFttiNaf_VsccwcvHWNMoqihuDasF0FvUGOSGVZ0obw1w8yL5pnyAbJmAs7l3QlEAITZCLmFh3x6VIg`}});
            return next.handle(authRequest)
        } else {
            return next.handle(request);
        }
    }
}
