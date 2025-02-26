import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {ExamsComponent} from "./exams/exams.component";
import {MessagesComponent} from "./messages/messages.component";
import {MissingStudentsComponent} from "./missing-students/missing-students.component";

export const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'home', component: HomeComponent},
    {path: 'exams', component: ExamsComponent},
    {path: 'messages', component: MessagesComponent},
    {path: 'missing-students', component: MissingStudentsComponent}

];
