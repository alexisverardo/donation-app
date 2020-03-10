import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { IUSer } from '../models/user';

/*RxJs*/
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

/* Cordova Plugins*/
import { Storage } from '@ionic/storage';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = environment.api_endpoint;

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
      private http: HttpClient,
      private localStorage: Storage
  ) { }

  public setSession(authResult) {
    this.localStorage.set('access_token', authResult.access_token);
    this.localStorage.set('token_type', authResult.token_type);
  }

  public login(user: IUSer): Observable<any> {
      return this.http.post(`${apiUrl}/login`, user, httpOptions)
          .pipe(
              map(authResult => {
                  if (authResult) {
                      this.setSession(authResult);
                  }
                  return authResult;
              })
          );
  }
}
