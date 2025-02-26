import { Component } from '@angular/core';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-student-editor',
  imports: [NzCheckboxModule, FormsModule],
  templateUrl: './student-editor.component.html',
  styleUrl: './student-editor.component.scss'
})
export class StudentEditorComponent {
  studentName: string = "";
  checked: boolean = false;

}
