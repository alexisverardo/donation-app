import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProvince } from '../models/province';
import { environment } from '../../environments/environment';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = environment.api_endpoint;

@Injectable({
  providedIn: 'root'
})
export class ProvinceService {

  constructor(private http: HttpClient) { }

  public query(): Observable<IProvince[]> {
    return this.http.get<IProvince[]>(`${apiUrl}/provinces`, httpOptions);
  }
}
