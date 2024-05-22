import { Component, OnInit } from '@angular/core';
import { VenuesDisplayComponent } from '../../../shared/venues-display/venues-display.component';
import { events } from '../../../interfaces/events';

@Component({
    selector: 'app-deportivos',
    standalone: true,
    imports: [VenuesDisplayComponent],
    templateUrl: './deportivos.component.html',
    styleUrl: './deportivos.component.css',
})
export class DeportivosComponent implements OnInit {
    venueId: number = events.find((e) => e.name === 'Deportivos')!.id;

    constructor() {}

    ngOnInit(): void {}
}
