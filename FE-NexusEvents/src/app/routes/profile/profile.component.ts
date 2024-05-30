import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { EventsService } from '../../services/events.service';
import { Events } from '../../interfaces/events';
import { SessionService } from '../../services/session.service';

@Component({
    selector: 'app-profile',
    standalone: true,
    imports: [MatCardModule],
    templateUrl: './profile.component.html',
    styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnInit {
    longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
    from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
    originally bred for hunting.`;

    userEvents: Events[] = [];

    constructor(
        private eventsService: EventsService,
        private sessionService: SessionService
    ) {}

    ngOnInit(): void {
        let userId = this.sessionService.getUserId();
        this.eventsService.getUserEvents(userId).subscribe({
            next: (data: Events[]) => {
                this.userEvents = data;
            },
            error: (err: any) =>
                console.log('Error al obtener los eventos del usuario', err),
        });
    }
}
