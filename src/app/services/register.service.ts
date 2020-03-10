import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../models/user';
import { Observable } from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = environment.api_endpoint;

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  register(user: User): Observable<User> {
    return this.http.post<User>(`${apiUrl}/register`, user, httpOptions);
  }
}
