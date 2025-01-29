import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../services/login.service";
import { NzCardModule } from 'ng-zorro-antd/card';

@Component({
  selector: 'app-home',
  imports: [NzCardModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  public username: string = '';
  constructor(private loginService: LoginService) {
    
  }

  ngOnInit(): void {
    this.loginService.username$.subscribe((value) => {
      this.username = value;
    })
    
  }
  

}
