import { Component, OnInit } from '@angular/core';
import { VenuesDisplayComponent } from '../../../shared/venues-display/venues-display.component';
import { eventsType } from '../../../interfaces/eventsType';

@Component({
    selector: 'app-institucionales',
    standalone: true,
    imports: [VenuesDisplayComponent],
    templateUrl: './institucionales.component.html',
    styleUrl: './institucionales.component.css',
})
export class InstitucionalesComponent implements OnInit {
    venueId: number = eventsType.find((e) => e.name === 'Institucionales')!.id;

    constructor() {}

    ngOnInit(): void {}
}
