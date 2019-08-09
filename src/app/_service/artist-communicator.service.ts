import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {artistInfoRequestParams } from '../_models/artist-models';
import { Observable } from 'rxjs';

const baseApiUrl =  'https://api.spotify.com';

@Injectable({
  providedIn: 'root'
})
export class ArtistCommunicatorService {

  constructor(private http: HttpClient) {}

 /*  getArtistInfo(requestParams: artistInfoRequestParams): Observable<any> {
    // return this.http.get<SaveProjectionsResponse>(`${environment.apiBaseUrl}/Projection/SaveProjection`, requestParams);
  } */

}

// Taylor's artist profile link:
// https://open.spotify.com/artist/06HL4z0CvFAxyc27GXpf02
