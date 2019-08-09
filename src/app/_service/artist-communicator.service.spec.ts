import { TestBed } from '@angular/core/testing';

import { ArtistCommunicatorService } from './artist-communicator.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ArtistCommunicatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ]
  }));

  it('should be created', () => {
    const service: ArtistCommunicatorService = TestBed.get(ArtistCommunicatorService);
    expect(service).toBeTruthy();
  });
});
