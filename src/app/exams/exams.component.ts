import {Component, Input, OnInit} from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import {ActivatedRoute, Router} from "@angular/router";
import { NzListModule } from 'ng-zorro-antd/list';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {ExamEditorComponent} from "../exam-editor/exam-editor.component";
import {NzModalModule, NzModalService} from "ng-zorro-antd/modal";
@Component({
  selector: 'app-exams',
  imports: [NzButtonModule, NzListModule, FormsModule, CommonModule, NzButtonModule, NzModalModule],
  templateUrl: './exams.component.html',
  styleUrl: './exams.component.scss'
})
export class ExamsComponent implements OnInit {
  courseId: string = '';
  exams: string[] = ["Nachschreibeklausur 1", "Nachschreibeklausur 2", "Nachschreibeklausur 3"];
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
      console.log("queryparams", queryParams);
      console.log("courseid:" + this.courseId);
      
    });
  }

  goBack(): void {
    this.router.navigate(['home'])
  }

  getAllExamsForCourse() {

  }

  openExamEditor(examName: string): void {
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
            modalRef.destroy();
          }
        }
      ],
      nzStyle: {'max-width': '60vw'},
      nzBodyStyle: {'height': '85%'},
    });
    modalRef.getContentComponent().examName = examName;
  }

  goToExamCreator() {

  }

}
