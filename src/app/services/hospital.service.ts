import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IProvince} from '../models/province';
import {environment} from '../../environments/environment';
import {IHospital} from '../pages/send-notification/send-notification.page';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = environment.api_endpoint;
@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  constructor(private http: HttpClient) { }

  public get(): Observable<IHospital[]> {
    return this.http.get<IHospital[]>(`${apiUrl}/hospitals`, httpOptions);
  }
}
