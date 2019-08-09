import { TestBed } from '@angular/core/testing';

import { AuthCommunicatorService } from './auth-communicator.service';

describe('AuthCommunicatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthCommunicatorService = TestBed.get(AuthCommunicatorService);
    expect(service).toBeTruthy();
  });
});
