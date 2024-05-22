import { Component, OnInit } from '@angular/core';
import { VenuesDisplayComponent } from '../../../shared/venues-display/venues-display.component';
import { events } from '../../../interfaces/events';

@Component({
    selector: 'app-institucionales',
    standalone: true,
    imports: [VenuesDisplayComponent],
    templateUrl: './institucionales.component.html',
    styleUrl: './institucionales.component.css',
})
export class InstitucionalesComponent implements OnInit {
    venueId: number = events.find((e) => e.name === 'Institucionales')!.id;

    constructor() {}

    ngOnInit(): void {}
}
