import { Injectable } from '@angular/core';
import { ArtistCommunicatorService } from './artist-communicator.service';

@Injectable({
  providedIn: 'root'
})
export class ArtistStateService {

  constructor(private communicator: ArtistCommunicatorService) { }

  fetchArtistInfo() {
    // Use communicator service to call API
  }
}
