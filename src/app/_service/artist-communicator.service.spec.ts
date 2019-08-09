import { TestBed } from '@angular/core/testing';

import { ArtistCommunicatorService } from './artist-communicator.service';

describe('ArtistCommunicatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArtistCommunicatorService = TestBed.get(ArtistCommunicatorService);
    expect(service).toBeTruthy();
  });
});
