import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalReportManage } from './medical-report-manage';

describe('MedicalReportManage', () => {
  let component: MedicalReportManage;
  let fixture: ComponentFixture<MedicalReportManage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicalReportManage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalReportManage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
