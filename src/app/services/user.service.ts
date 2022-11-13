import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

const baseUrl = 'http://localhost:8080/api/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  
  createUser(data: any): Observable<any> {
    return this.http.post(baseUrl+'/create', data);
  }
  getUserById(id: any): Observable<User> {
    return this.http.get<User>(`${baseUrl}/${id}`);
  }
  updateUser(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(baseUrl+"/all");
  }

  deleteUserById(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/delete/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(`${baseUrl}/all`);
  }



}
