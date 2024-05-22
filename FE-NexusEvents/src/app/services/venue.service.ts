import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable, shareReplay } from 'rxjs';
import { Venue } from '../interfaces/venue';

@Injectable({
  providedIn: 'root'
})
export class VenueService {

  constructor(private http: HttpClient) { }

  getVenues(spaceType: number): Observable<Venue[]> {
    let response = this.http.get<Venue[]>(environment.apiURL + `/Spaces/bySpaceType/${spaceType}`).pipe(shareReplay());
    return response;
  }
}
