import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { EventsService } from '../../services/events.service';
import { Events } from '../../interfaces/events';
import { SessionService } from '../../services/session.service';
import { DatePipe, NgClass } from '@angular/common';
import { MatIcon } from '@angular/material/icon';

@Component({
    selector: 'app-profile',
    standalone: true,
    imports: [MatCardModule, DatePipe, MatIcon, NgClass],
    templateUrl: './profile.component.html',
    styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnInit {
    userEvents: Events[] = [];
    isShownMap: { [key: number]: boolean } = {};

    constructor(
        private eventsService: EventsService,
        private sessionService: SessionService
    ) {}

    ngOnInit(): void {
        this.loadData();
    }

    loadData() {
        let userId = this.sessionService.getUserId();
        this.eventsService.getUserEvents(userId).subscribe({
            next: (data: Events[]) => {
                this.userEvents = data;
                this.userEvents.forEach((event, index) => {
                    this.isShownMap[index] = false;
                });
            },
            error: (err: any) =>
                console.log('Error al obtener los eventos del usuario', err),
        });
    }

    deleteEvent(id: any) {
        this.eventsService.deleteEvent(id).subscribe({
            next: () => {
                this.loadData();
            },
            error: (err: any) =>
                console.log('Error al eliminar el evento', err),
        });
    }

    toggleShow(index: number): void {
        this.isShownMap[index] = !this.isShownMap[index];
    }
}
