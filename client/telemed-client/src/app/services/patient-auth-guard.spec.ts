import { TestBed } from '@angular/core/testing';

import { PatientAuthGuard } from './patient-auth-guard';

describe('PatientAuthGuard', () => {
  let guard: PatientAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PatientAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
