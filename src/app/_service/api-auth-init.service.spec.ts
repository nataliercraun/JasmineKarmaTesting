import { TestBed } from '@angular/core/testing';

import { ApiAuthInitService } from './api-auth-init.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ApiAuthInitService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ]
  }));

  it('should be created', () => {
    const service: ApiAuthInitService = TestBed.get(ApiAuthInitService);
    expect(service).toBeTruthy();
  });
});
