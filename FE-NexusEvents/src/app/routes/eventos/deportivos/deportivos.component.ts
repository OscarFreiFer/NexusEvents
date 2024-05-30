import { Component, OnInit } from '@angular/core';
import { VenuesDisplayComponent } from '../../../shared/venues-display/venues-display.component';
import { eventsType } from '../../../interfaces/eventsType';

@Component({
    selector: 'app-deportivos',
    standalone: true,
    imports: [VenuesDisplayComponent],
    providers: [],
    templateUrl: './deportivos.component.html',
    styleUrl: './deportivos.component.css',
})
export class DeportivosComponent implements OnInit {
    venueId: number = eventsType.find((e) => e.name === 'Deportivos')!.id;

    constructor() {}

    ngOnInit(): void {}
}
