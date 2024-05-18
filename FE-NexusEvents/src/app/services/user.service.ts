import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { environment } from '../../environments/environment.development';
import { Observable, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  register(user :User): Observable<User> {
    let response = this.http.post<User>(environment.apiURL + '/Users/register', user).pipe(shareReplay());
    return response;
  }

  login(email?: string, passwd?: string){
    let response = this.http.get(environment.apiURL + '/Users')
    
    // let response = this.http.post(environment.apiURL + '/Users/login', {email: email, password:  passwd}).pipe(shareReplay());
    return response;
  }
}
