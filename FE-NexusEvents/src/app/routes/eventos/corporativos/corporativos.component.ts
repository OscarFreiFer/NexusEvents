import { Component, OnInit } from '@angular/core';
import { VenuesDisplayComponent } from '../../../shared/venues-display/venues-display.component';
import { eventsType } from '../../../interfaces/eventsType';

@Component({
    selector: 'app-corporativos',
    standalone: true,
    imports: [VenuesDisplayComponent],
    templateUrl: './corporativos.component.html',
    styleUrl: './corporativos.component.css',
})
export class CorporativosComponent implements OnInit {
    venueId: number = eventsType.find((e) => e.name === 'Corporativos')!.id;

    constructor() {}

    ngOnInit(): void {}
}
