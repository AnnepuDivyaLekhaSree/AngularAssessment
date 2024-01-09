import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../interfaces/user.interface';

@Injectable({
    providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    const data = this.http.get<any>('https://dummyjson.com/users');
    return data;
  }
}