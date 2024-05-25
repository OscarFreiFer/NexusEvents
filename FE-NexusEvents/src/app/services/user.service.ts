import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { environment } from '../../environments/environment.development';
import { Observable, shareReplay } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    constructor(private http: HttpClient) {}

    register(user: User): Observable<string> {
        let response = this.http
            .post<string>(environment.apiURL + '/Users/register', user)
            .pipe(shareReplay());
        return response;
    }

    login(user: User): Observable<string> {
        let request = {
            email: user.email,
            password: user.password,
        };

        let response = this.http
            .post<string>(environment.apiURL + '/Users/login', request)
            .pipe(shareReplay());
        return response;
    }
}
