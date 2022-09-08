import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public baseUrl = 'http://localhost:3300/'
  constructor(private http: HttpClient) {   }

  signup(body:any){
    return this.http.post(`${this.baseUrl}create/user`,body);
  }

  login(body:any){
    return this.http.post(`${this.baseUrl}login`,body);
  }

  }

