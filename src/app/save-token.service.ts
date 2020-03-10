import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import {HttpHeaders, HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SaveTokenService {
  ENDPOINT = environment.ENDPOINT + '/api/user-notify-token';
  headers = new HttpHeaders({'Content-type': 'application/json; charset=UTF-8'});
  constructor(private http: HttpClient) {
  }

  storeTokenWS(tokenWS: ITokenWS): Observable<any> {
    return this.http.post<any>(this.ENDPOINT, tokenWS, {headers: this.headers});
  }

}

export interface ITokenWS {
  token: string;
}
