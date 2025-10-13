import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientAddForm } from './patient-add-form';

describe('PatientAddForm', () => {
  let component: PatientAddForm;
  let fixture: ComponentFixture<PatientAddForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientAddForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientAddForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
