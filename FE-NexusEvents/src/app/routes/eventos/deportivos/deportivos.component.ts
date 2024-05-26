import { Component, OnInit } from '@angular/core';
import { VenuesDisplayComponent } from '../../../shared/venues-display/venues-display.component';
import { events } from '../../../interfaces/events';
import { provideNativeDateAdapter } from '@angular/material/core';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'app-deportivos',
    standalone: true,
    imports: [VenuesDisplayComponent, DatePipe],
    providers: [provideNativeDateAdapter()],
    templateUrl: './deportivos.component.html',
    styleUrl: './deportivos.component.css',
})
export class DeportivosComponent implements OnInit {
    venueId: number = events.find((e) => e.name === 'Deportivos')!.id;

    constructor(private datepipe: DatePipe) {}

    ngOnInit(): void {}
}
