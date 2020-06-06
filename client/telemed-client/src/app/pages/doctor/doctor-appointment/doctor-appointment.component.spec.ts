import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorAppointmentComponent } from './doctor-appointment.component';

describe('DoctorAppointmentComponent', () => {
  let component: DoctorAppointmentComponent;
  let fixture: ComponentFixture<DoctorAppointmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorAppointmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
