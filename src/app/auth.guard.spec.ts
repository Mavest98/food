import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { AuthGuard } from './auth.guard'; // Correct import

describe('AuthGuard', () => {
  let guard: AuthGuard; // Declare the AuthGuard instance

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuard] // Provide AuthGuard
    });
    guard = TestBed.inject(AuthGuard); // Inject the guard
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
