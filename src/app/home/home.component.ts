import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../services/login.service";
import { NzCardModule } from 'ng-zorro-antd/card';
import {Router} from "@angular/router";
import {NzModalModule} from "ng-zorro-antd/modal";
import {CommonModule} from "@angular/common";
import { NzGridModule } from 'ng-zorro-antd/grid';
import {CoursesService} from "../../services/courses.service";

@Component({
  selector: 'app-home',
  imports: [CommonModule, NzCardModule, NzModalModule, NzGridModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  public username: string = '';
  public courses: any;
  constructor(
      private loginService: LoginService,
      private router: Router,
      private coursesService: CoursesService,
  ) {
  }

  ngOnInit(): void {
    this.loginService.username$.subscribe((value) => {
      this.username = value;
    })
    
    this.getAlLCourses();
  }
  
  getAlLCourses() { //TODO: the ssid should come from the localstorage after login
    this.coursesService.getAllCourses("111111111").subscribe((res) => {
      this.courses = res;
    } )
  }
  
  goToExams(courseId: string): void {
    this.router.navigate(['exams'], {queryParams: {courseId: courseId}});
  }

}
