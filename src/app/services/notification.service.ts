import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {ICampaign} from '../pages/send-notification/ICampaign';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = environment.api_endpoint;

@Injectable({
  providedIn: 'root'
})

export class NotificationService {
  constructor(private http: HttpClient) {}

  public send(campaign: ICampaign): Observable<any> {
    return this.http.post<any>(`${apiUrl}/campaigns`, campaign, httpOptions);
  }

  public get(): Observable<ICampaign[]> {
    return this.http.get<ICampaign[]>(`${apiUrl}/campaigns`, httpOptions);
  }

  public show(id): Observable<ICampaign> {
    return this.http.get<ICampaign>(`${apiUrl}/campaigns/${id}`, httpOptions);
  }

  public delete(id) {
    return this.http.delete(`${apiUrl}/campaigns/${id}`, httpOptions);
  }

  public accept(id) {
    return this.http.get(`${apiUrl}/campaigns-accept/${id}`, httpOptions);
  }
}
