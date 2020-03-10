import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProvince } from '../models/province';
import { environment } from '../../environments/environment';
import { ILocation } from '../models/location';

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

  public locationsByProvince(province_id: number): Observable<ILocation[]> {
      return this.http.get<ILocation[]>(`${apiUrl}/provinces/${province_id}/locations`, httpOptions);
  }
}
