import { TestBed } from '@angular/core/testing';

import { ArtistStateService } from './artist-state.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ArtistStateService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ]
  }));

  it('should be created', () => {
    const service: ArtistStateService = TestBed.get(ArtistStateService);
    expect(service).toBeTruthy();
  });
});
