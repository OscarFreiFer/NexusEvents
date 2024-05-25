import { Injectable, inject } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivateFn,
    Router,
    RouterStateSnapshot,
} from '@angular/router';

import { SessionService } from '../services/session.service';

@Injectable({
    providedIn: 'root',
})
class AuthGuardService {
    constructor(
        private router: Router,
        private sessionService: SessionService
    ) {}

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean {
        if (!this.sessionService.isLogged()) {
            this.router.navigate(['/login'], {
                queryParams: { returnUrl: state.url },
            });
            return false;
        } else {
            return true;
        }
    }
}

export const authGuard: CanActivateFn = (
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
): boolean => {
    return inject(AuthGuardService).canActivate(next, state);
};
