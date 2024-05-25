import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class SessionService {
    constructor() {}

    isLogged(): boolean {
        if (typeof localStorage !== 'undefined') {
            return localStorage.getItem('X-User-Token') != null;
        } else if (typeof sessionStorage !== 'undefined') {
            return sessionStorage.getItem('X-User-Token') != null;
        } else {
            return false;
        }
    }
    clearSession() {
        if (typeof localStorage !== 'undefined') {
            return localStorage.clear();
        } else if (typeof sessionStorage !== 'undefined') {
            return sessionStorage.clear();
        }
    }
    setToken(token: string) {
        if (typeof localStorage !== 'undefined') {
            return localStorage.setItem('X-User-Token', token);
        } else if (typeof sessionStorage !== 'undefined') {
            return sessionStorage.setItem('X-User-Token', token);
        }
    }
    getToken(): string | null {
        if (typeof localStorage !== 'undefined') {
            return localStorage.getItem('X-User-Token');
        } else if (typeof sessionStorage !== 'undefined') {
            return sessionStorage.getItem('X-User-Token');
        } else {
            return null;
        }
    }

    setProfile(profile: any) {
        if (typeof localStorage !== 'undefined') {
            return localStorage.setItem(
                'NexusEventsUserId',
                JSON.stringify(profile)
            );
        } else if (typeof sessionStorage !== 'undefined') {
            return sessionStorage.setItem(
                'NexusEventsUserId',
                JSON.stringify(profile)
            );
        }
    }

    getUserId(): number {
        let profile: string | null = null;
        if (typeof localStorage !== 'undefined') {
            profile = localStorage.getItem('NexusEventsUserId');
        } else if (typeof sessionStorage !== 'undefined') {
            profile = sessionStorage.getItem('NexusEventsUserId');
        }

        return profile ? JSON.parse(profile).user.id : null;
    }
}
