import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class DrawerService {
    private toggleDrawerSource = new Subject<void>();
    toggleDrawer$ = this.toggleDrawerSource.asObservable();

    toggleDrawer() {
        this.toggleDrawerSource.next();
    }

    constructor() {}
}
