import {Component, OnInit} from '@angular/core';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import {FormsModule} from "@angular/forms";
import { NzSelectModule } from 'ng-zorro-antd/select';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-exam-editor',
  imports: [NzModalModule, NzDatePickerModule, FormsModule, NzSelectModule, CommonModule],
  templateUrl: './exam-editor.component.html',
  styleUrl: './exam-editor.component.scss'
})
export class ExamEditorComponent implements OnInit {
  date: Date = new Date();
  selectedUsers: string[] = [];
  users = ['John', 'Jane', 'Tom', 'Alice', 'Bob'];
  examName: string = "";

  constructor() {
    
  }
  ngOnInit(): void {
  }

  onChange(result: Date): void {
    console.log('onChange: ', result);
  }
  
  passData() {
    return this.selectedUsers;
  }
  
  
}
