import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientSideBarComponent } from './patient-side-bar.component';

describe('PatientSideBarComponent', () => {
  let component: PatientSideBarComponent;
  let fixture: ComponentFixture<PatientSideBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientSideBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
