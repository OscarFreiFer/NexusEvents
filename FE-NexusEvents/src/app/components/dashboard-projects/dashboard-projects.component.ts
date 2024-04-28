import { Component, Input } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { Events } from '../../interfaces/events';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-dashboard-projects',
    standalone: true,
    imports: [MatGridListModule, CommonModule],
    templateUrl: './dashboard-projects.component.html',
    styleUrl: './dashboard-projects.component.css',
})
export class DashboardProjectsComponent {
    @Input() eventsType: Events[] = [];
}
