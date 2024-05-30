import { Component, Input } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { EventsType } from '../../interfaces/eventsType';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-dashboard-projects',
    standalone: true,
    imports: [MatGridListModule, CommonModule],
    templateUrl: './dashboard-projects.component.html',
    styleUrl: './dashboard-projects.component.css',
})
export class DashboardProjectsComponent {
    @Input() eventsType: EventsType[] = [];
}
