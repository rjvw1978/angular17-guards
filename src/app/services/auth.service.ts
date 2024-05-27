import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap} from 'rxjs';
import { User } from '../models/user';
import { JsonPipe } from '@angular/common';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url="https://reqres.in/api/";
  isLogginOn: BehaviorSubject<boolean>

  constructor(private http:HttpClient) { 
    this.isLogginOn = new BehaviorSubject<boolean> (false);
  }

  createUser(user:User):Observable<any>
  {
    return this.http.post(this.url+ "users/1", user);
  }

  login(credentials:any):Observable<any>
  {

    return this.http.post(this.url+"login",credentials )
    .pipe(
      tap(
        data => {
          console.log("login: " + data)
          this.isLogginOn.next(true);
        }
    ));
  }

  get isAuthenticated(): boolean{
    return this.isLogginOn.value;
  }
 




}
