import { TestBed } from '@angular/core/testing';

import { DoctorAuthGuard } from './doctor-auth.guard';

describe('DoctorAuthGuard', () => {
  let guard: DoctorAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DoctorAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
