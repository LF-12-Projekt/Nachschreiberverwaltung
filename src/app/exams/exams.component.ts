import {Component, Input, OnInit} from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import {ActivatedRoute, Router} from "@angular/router";
import { NzListModule } from 'ng-zorro-antd/list';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {ExamEditorComponent} from "../exam-editor/exam-editor.component";
import {NzModalModule, NzModalService} from "ng-zorro-antd/modal";
import {ExamCreatorComponent} from "../exam-creator/exam-creator.component";
@Component({
  selector: 'app-exams',
  imports: [NzButtonModule, NzListModule, FormsModule, CommonModule, NzButtonModule, NzModalModule],
  templateUrl: './exams.component.html',
  styleUrl: './exams.component.scss'
})
export class ExamsComponent implements OnInit {
  courseId: string = '';
  exams: { title: string; date: Date, users: string[] }[] = [
    { title: "Nachschreibeklausur 1", date: new Date(2025, 4, 10), users: []}, // 10th May 2025
    { title: "Nachschreibeklausur 2", date: new Date(2025, 5, 15), users: [] }, // 15th June 2025
  ];  
  selectedUsers: string[] = [];
  exams1: any;

  constructor(
      private router: Router,
      private modal: NzModalService,
      private activatedRoute: ActivatedRoute
  ) {
  }
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(queryParams => {
      this.courseId = queryParams['courseId'];
    });
  }

  goBack(): void {
    this.router.navigate(['home'])
  }

  getAllExamsForCourse() {

  }

  openExamEditor(examName: string, date: Date, users: string[]): void {
    const modalRef = this.modal.create({
      nzContent: ExamEditorComponent,
      nzFooter: [
        {
          label: 'Abbrechen',
          onClick: () => {
            modalRef.destroy();
          }
        },
        {
          label: 'Speichern',
          type: 'primary',
          onClick: () => {
            this.selectedUsers = modalRef.getContentComponent().passData();
            console.log('Data saved!');
            console.log(this.selectedUsers);
            let exam = this.exams.find((exam) => exam.title == examName)
            if (exam) {
              exam.users = this.selectedUsers;
            }
            modalRef.destroy();
          }
        }
      ],
      nzStyle: {'max-width': '60vw'},
      nzBodyStyle: {'height': '85%'},
    });
    modalRef.getContentComponent().examName = examName;
    modalRef.getContentComponent().date = date;
    modalRef.getContentComponent().selectedUsers = users;
  }

  openExamCreator() {
    const modalRef = this.modal.create({
      nzContent: ExamCreatorComponent,
      nzFooter: [
        {
          label: 'Abbrechen',
          onClick: () => {
            modalRef.destroy();
          }
        },
        {
          label: 'Speichern',
          type: 'primary',
          onClick: () => {
            this.selectedUsers = modalRef.getContentComponent().selectedUsers;
            this.exams.push({
              title: modalRef.getContentComponent().examName, 
              date: modalRef.getContentComponent().date,
              users: modalRef.getContentComponent().selectedUsers,
            },)
            modalRef.destroy();
          }
        }
      ],
      nzStyle: {'max-width': '60vw'},
      nzBodyStyle: {'height': '85%'},
    });
  }

}
