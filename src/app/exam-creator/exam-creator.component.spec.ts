import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamCreatorComponent } from './exam-creator.component';

describe('ExamCreatorComponent', () => {
  let component: ExamCreatorComponent;
  let fixture: ComponentFixture<ExamCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExamCreatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
