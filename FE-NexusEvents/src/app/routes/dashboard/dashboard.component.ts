import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { CardElementComponent } from '../../components/card-element/card-element.component';
import { DashboardProjectsComponent } from '../../components/dashboard-projects/dashboard-projects.component';
import { NgStyle, UpperCasePipe } from '@angular/common';
import { FooterComponent } from '../../components/footer/footer.component';
import { Events, events } from '../../interfaces/events';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [
        HeaderComponent,
        CardElementComponent,
        DashboardProjectsComponent,
        UpperCasePipe,
        FooterComponent,
        NgStyle,
    ],
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
    title: string = 'Nexus Events';
    eventsTpye: Events[] = events;
}
