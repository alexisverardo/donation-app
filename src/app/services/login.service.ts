import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

/*RxJs*/
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

/* Cordova Plugins*/
import { Storage } from '@ionic/storage';

import { User } from '../models/user';

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
      private localStorage: Storage,
  ) { }

  public setSession(authResult) {
    this.localStorage.set('access_token', authResult.access_token);
    this.localStorage.set('token_type', authResult.token_type);
  }

  public login(login): Observable<any> {
      return this.http.post(`${apiUrl}/login`, login, httpOptions)
          .pipe(
              map(authResult => {
                  if (authResult) {
                      this.setSession(authResult);
                  }
                  return authResult;
              })
          );
  }

    register(fullUser: any): Observable<User> {
        return this.http.post<User>(`${apiUrl}/register`, fullUser, httpOptions)
            .pipe(
                map(authResult => {
                    if (authResult) {
                        this.setSession(authResult);
                    }
                    return authResult;
                })
            );
    }

  public async isAuthenticated(): Promise<boolean> {
      return await this.localStorage.get('access_token') != null;
  }
}
