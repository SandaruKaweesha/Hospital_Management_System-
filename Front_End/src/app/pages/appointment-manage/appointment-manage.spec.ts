import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentManage } from './appointment-manage';

describe('AppointmentManage', () => {
  let component: AppointmentManage;
  let fixture: ComponentFixture<AppointmentManage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppointmentManage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentManage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
