import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(private localStorage: Storage) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.localStorage.get('access_token');

        if (token) {
            req = req.clone({
                setHeaders: {
                    'Authorization': `Bearer ${token}`
                },
            });
        }
        return next.handle(req);
    }
}
