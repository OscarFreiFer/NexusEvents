import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { EventsType } from '../../interfaces/eventsType';
import { Router, RouterLink } from '@angular/router';

@Component({
    selector: 'app-card-element',
    standalone: true,
    imports: [MatIconModule, CommonModule, RouterLink],
    templateUrl: './card-element.component.html',
    styleUrl: './card-element.component.css',
})
export class CardElementComponent {
    @Input() eventsType: EventsType[] = [];

    constructor(private router: Router) {}

    onClick(ruta: string): void {
        this.router.navigateByUrl(ruta);
    }
}
