import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissingStudentsComponent } from './missing-students.component';

describe('MissingStudentsComponent', () => {
  let component: MissingStudentsComponent;
  let fixture: ComponentFixture<MissingStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MissingStudentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MissingStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
