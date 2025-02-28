import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ExamService {
  private baseUrl = 'http://127.0.0.1:8080';
  constructor(private http: HttpClient) { }
  
  getAllExams(courseId: string, role: string) {
      const headers = new HttpHeaders({
          'Content-Type': 'application/json',
          'X-User-Role': role
      });
    return this.http.get(`${this.baseUrl}/resit/course/${courseId}`, {headers}).pipe(
        catchError(err => {
              console.log(err);
              return throwError(() => new Error('An error occurred while attempting to get all exams.'));
            }
        )
    )
  }
}
