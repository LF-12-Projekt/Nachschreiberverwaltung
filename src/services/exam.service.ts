import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ExamService {
  private baseUrl = 'http://127.0.0.1:8080';
  constructor(private http: HttpClient) { }
  
  getAllExams() { //TODO backend will be changed from ssid to courseid
    return this.http.get(`${this.baseUrl}/resit/list/${555555555}`, {}).pipe(
        catchError(err => {
              console.log(err);
              return throwError(() => new Error('An error occurred during login.'));
            }
        )
    )
  }
}
