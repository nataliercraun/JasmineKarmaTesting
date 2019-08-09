import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthCommunicatorService {

  constructor(private http: HttpClient) { }

  fetchApplicationAuth(): Observable<any> {
    return this.http.post<any>(`${environment.authServerUrl}`, null);
  }

}
