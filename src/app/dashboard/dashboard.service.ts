import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  public baseUrl = 'http://localhost:3300/'

  constructor(private http: HttpClient) { }

  createBlog(bodyReq: any){
    return this.http.post(`${this.baseUrl}create/blog`,bodyReq);
  }

  getBlogsList(){
    return this.http.get(`${this.baseUrl}blogs/list`);
  }

  deleteBlog(id:any){
    return this.http.delete(`${this.baseUrl}delete/blog/${id}`);
  }
}