import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, catchError, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl = 'http://127.0.0.1:8080';
  constructor(private httpClient: HttpClient) { }
    userSubject: BehaviorSubject<string> = new BehaviorSubject<string>("");
    username$ = this.userSubject.asObservable();
  
  emitUser(username: string) {
      this.userSubject.next(username);
  }
  login(username: string) {
    return this.httpClient.get(`${this.baseUrl}/${username}`, {}).pipe(
        catchError(err => {
              console.log(err);
              return throwError(() => new Error('An error occurred during login.'));
            }
        )
    )
    
  }
}
