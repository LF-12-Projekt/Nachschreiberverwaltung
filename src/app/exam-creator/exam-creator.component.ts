import { Component } from '@angular/core';
import { NzInputModule } from 'ng-zorro-antd/input';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {NzDatePickerComponent} from "ng-zorro-antd/date-picker";
import {NzOptionComponent, NzSelectComponent} from "ng-zorro-antd/select";

@Component({
  selector: 'app-exam-creator',
  imports: [NzInputModule, CommonModule, FormsModule, NzDatePickerComponent, NzOptionComponent, NzSelectComponent],
  templateUrl: './exam-creator.component.html',
  styleUrl: './exam-creator.component.scss'
})
export class ExamCreatorComponent {
  examName: string = "";
  date: Date = new Date();
  selectedUsers: string[] = [];
  users = ['John', 'Jane', 'Tom', 'Alice', 'Bob'];

}
