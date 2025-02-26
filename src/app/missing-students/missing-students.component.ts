import { Component } from '@angular/core';
import {NzCardComponent} from "ng-zorro-antd/card";
import {Router} from "@angular/router";
import { NzListModule } from 'ng-zorro-antd/list';
import {CommonModule, NgForOf} from "@angular/common";
import {NzButtonComponent} from "ng-zorro-antd/button";
import {NzWaveDirective} from "ng-zorro-antd/core/wave";
import {NzModalModule, NzModalService} from 'ng-zorro-antd/modal';
import {StudentEditorComponent} from "../student-editor/student-editor.component";
import { NzBadgeModule } from 'ng-zorro-antd/badge';

@Component({
  selector: 'app-missing-students',
  imports: [
    NzListModule,
    NgForOf,
    NzButtonComponent,
    NzWaveDirective,
    NzModalModule,
    NzBadgeModule,
    CommonModule
  ],
  templateUrl: './missing-students.component.html',
  styleUrl: './missing-students.component.scss'
})
export class MissingStudentsComponent {
  missingStudents = [
      {name: "Alex", isExcused: true}, 
      {name: "Klara", isExcused: true}, 
      {name: "Tom", isExcused: false}
  ];
  constructor(private router: Router, private modalRef: NzModalService) {
  }
  
  goBack() {
    this.router.navigate(["exams"]);
  }
  
  goToEditor(studentName: string, isExcused: boolean) {
    const modalRef = this.modalRef.create({
      nzContent: StudentEditorComponent,
      nzFooter: [
        {
          label: "Abbrechen",
          onClick: () => {
            modalRef.destroy();
          }
        },
        {
          label: 'Speichern',
          type: 'primary',
          onClick: () => {
            const student = this.missingStudents.find((student) => student.name === studentName);
            if (student) {
              student.isExcused = modalRef.getContentComponent().checked;
            } else {
              console.warn(`Student mit dem Namen "${studentName}" wurde nicht gefunden.`);
            }
            modalRef.close();
          }
        }
      ]
    })
    modalRef.getContentComponent().studentName = studentName;
    modalRef.getContentComponent().checked = isExcused;
  }
}
