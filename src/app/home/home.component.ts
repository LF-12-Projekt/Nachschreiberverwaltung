import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../services/login.service";
import { NzCardModule } from 'ng-zorro-antd/card';
import {Router} from "@angular/router";
import {NzModalModule} from "ng-zorro-antd/modal";
import {CommonModule} from "@angular/common";
import { NzGridModule } from 'ng-zorro-antd/grid';

@Component({
  selector: 'app-home',
  imports: [CommonModule, NzCardModule, NzModalModule, NzGridModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  public username: string = '';
  public courses: any = ["Kursname", "Kursname1", "Kursname2", "Kursname3"];
  constructor(private loginService: LoginService, private router: Router) {
    
  }

  ngOnInit(): void {
    this.loginService.username$.subscribe((value) => {
      this.username = value;
    })
    
  }
  
  goToExams(): void {
    this.router.navigate(['exams']);
  }

}
