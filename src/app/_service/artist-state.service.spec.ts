import { TestBed } from '@angular/core/testing';

import { ArtistStateService } from './artist-state.service';

describe('ArtistStateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArtistStateService = TestBed.get(ArtistStateService);
    expect(service).toBeTruthy();
  });
});
