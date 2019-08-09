import { Component, OnInit } from '@angular/core';
import { ArtistStateService } from './_service/artist-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'sideproj';

  constructor(private artistStateService: ArtistStateService) { }

  ngOnInit() {
    // Call artis api
    // this.fetchArtist();
  }

  fetchArtist() {
    this.artistStateService.fetchArtistInfo();
  }
}
