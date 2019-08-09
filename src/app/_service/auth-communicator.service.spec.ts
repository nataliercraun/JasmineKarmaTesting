import { TestBed } from '@angular/core/testing';

import { AuthCommunicatorService } from './auth-communicator.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AuthCommunicatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ]
  }));

  it('should be created', () => {
    const service: AuthCommunicatorService = TestBed.get(AuthCommunicatorService);
    expect(service).toBeTruthy();
  });
});
