import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { HttpInterceptor, HttpRequest, HttpResponse, HttpHandler, HttpEvent } from '@angular/common/http';
// import { MatSnackBar } from '@angular/material';
// import { UserStateService } from '@am/core/_services';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(private userStateService: UserStateService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
/*
        if (request.url.startsWith(environment.apiBaseUrl)) {
            const header: any = {};

            // When Application is hosted in an non sibbloth auth environment (local development Environments),
            // The user name passed here will be the logged-in-user.
            // If the applicaiton is hosted in environment which is secured by sibbloth,
            // the sso_id will be added from the siteminder.
            if (!environment.production) {
                header['Content-Type'] = 'application/json';
                header['SM_User'] = environment.devLoggedInUser;
                header['SM_SERVERSESSIONID'] = 'dummySessionId';
            }

            if (this.userStateService.Token) {
                header.am_access_token = this.userStateService.Token;
                header.app_id = environment.appId;
            }

            request = request.clone({
                setHeaders: header
            });
        }

        return next.handle(request); */
    }
}

@Injectable()
export class RedirectInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      /*   return next.handle(request).pipe(tap(evt => {
            if (evt instanceof HttpResponse) {
                const resp = evt;
            }
        }), catchError(err => {
            if (err.status === 302) {
                console.log(err.status);
            }

            return throwError(err);
        })
        ); */
    }
}

