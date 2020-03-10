import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ILocation } from '../models/location';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = environment.api_endpoint;

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient) { }

  public query(): Observable<ILocation[]> {
    return this.http.get<ILocation[]>(`${apiUrl}/locations`, httpOptions);
  }
}
