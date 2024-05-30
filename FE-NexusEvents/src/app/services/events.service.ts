import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Events } from '../interfaces/events';
import { environment } from '../../environments/environment.development';
import { Observable, shareReplay } from 'rxjs';
import { DateEvents } from '../interfaces/date-events';

@Injectable({
    providedIn: 'root',
})
export class EventsService {
    constructor(private http: HttpClient) {}

    getEvents(): Observable<Events[]> {
        let response = this.http
            .get<Events[]>(environment.apiURL + `/Events`)
            .pipe(shareReplay());
        return response;
    }

    getUserEvents(userId: number): Observable<Events[]> {
        let response = this.http
            .get<Events[]>(environment.apiURL + `/Events/User/${userId}`)
            .pipe(shareReplay());
        return response;
    }

    getDateEvents(spaceId: number): Observable<DateEvents[]> {
        let response = this.http
            .get<DateEvents[]>(environment.apiURL + `/Events/dates/${spaceId}`)
            .pipe(shareReplay());
        return response;
    }

    postEvent(data: Events): Observable<Events> {
        let response = this.http
            .post<Events>(environment.apiURL + `/Events`, data)
            .pipe(shareReplay());
        return response;
    }
}
