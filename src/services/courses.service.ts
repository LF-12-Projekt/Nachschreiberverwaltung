import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private baseUrl = 'http://127.0.0.1:8080';

  constructor(private http: HttpClient) { }
  
  getAllCourses(ssid: string) {
    return this.http.get(`${this.baseUrl}/courses/${ssid}`, {}).pipe(
        catchError(err => {
          console.log(err);
          return throwError(err);
        })
    )
  }
}
