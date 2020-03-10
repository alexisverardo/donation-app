import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import {from, Observable, of} from 'rxjs';
import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import {catchError, map, switchMap} from 'rxjs/operators';
import {fromPromise} from 'rxjs/internal-compatibility';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(private localStorage: Storage) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const url = req.url.toString();
        return fromPromise(this.localStorage.get('access_token')).pipe(
            switchMap(token => {
                if ( !url.includes('login')) {
                    req = req.clone({
                        setHeaders: {
                            'Authorization': `Bearer ${token}`
                        },
                    });
                }
                return next.handle(req);
            }),
            catchError(err => {
                return next.handle(req);
            })
        );
    }
}
