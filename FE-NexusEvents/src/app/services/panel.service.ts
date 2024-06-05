import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class PanelService {
    private togglePanelSource = new Subject<void>();
    togglePanel$ = this.togglePanelSource.asObservable();

    togglePanel() {
        this.togglePanelSource.next();
    }

    constructor() {}
}
