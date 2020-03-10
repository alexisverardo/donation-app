import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { IBloodType } from '../models/blood-type';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = environment.api_endpoint;

@Injectable({
  providedIn: 'root'
})
export class BloodTypeService {

  constructor(private http: HttpClient) { }

  public query(): Observable<IBloodType[]> {
    return this.http.get<IBloodType[]>(`${apiUrl}/blood_types`, httpOptions);
  }
}
