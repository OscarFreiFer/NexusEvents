import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Events } from '../../interfaces/events';
import { RouterLink } from '@angular/router';


@Component({
    selector: 'app-card-element',
    standalone: true,
    imports: [MatIconModule, CommonModule, RouterLink],
    templateUrl: './card-element.component.html',
    styleUrl: './card-element.component.css',
})
export class CardElementComponent {
    @Input() eventsType : Events[] = [];
}
