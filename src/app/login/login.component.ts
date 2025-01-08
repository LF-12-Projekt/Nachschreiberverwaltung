import { Component, OnInit } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule } from '@angular/forms';
import {LoginService} from "../../services/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  imports: [NzModalModule, NzButtonModule, NzIconModule, NzInputModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  public isVisible: boolean = false;
  public username: string = '';
  public loggedIn: boolean = false;
  
  constructor(private loginService: LoginService, private router: Router) {
    
  }

  ngOnInit(): void {
    this.isVisible = true;
  }
  
  closeModal(): void {
    this.isVisible = false;
  }

  login() {
    /* TODO: change when endpoint is done
    this.loginService.login(this.username).subscribe(res => {
      this.isVisible = false
      this.loggedIn = true;
      localStorage.setItem('loggedIn', this.loggedIn.toString());
    })*/
    this.loggedIn = true;
    this.isVisible = false;
    this.router.navigate(['home']);
    this.loginService.emitUser(this.username);
  }

}
