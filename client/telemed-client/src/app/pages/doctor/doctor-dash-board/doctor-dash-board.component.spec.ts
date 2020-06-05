import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorDashBoardComponent } from './doctor-dash-board.component';

describe('DoctorDashBoardComponent', () => {
  let component: DoctorDashBoardComponent;
  let fixture: ComponentFixture<DoctorDashBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorDashBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorDashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
