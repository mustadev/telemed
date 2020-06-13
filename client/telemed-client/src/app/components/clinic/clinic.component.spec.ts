import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicComponent } from './clinic.component';

describe('ClinicComponent', () => {
  let component: ClinicComponent;
  let fixture: ComponentFixture<ClinicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
