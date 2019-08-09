import { TestBed } from '@angular/core/testing';

import { ApiAuthInitService } from './api-auth-init.service';

describe('ApiAuthInitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiAuthInitService = TestBed.get(ApiAuthInitService);
    expect(service).toBeTruthy();
  });
});
