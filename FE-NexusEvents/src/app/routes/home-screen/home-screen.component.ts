import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { CardElementComponent } from '../../components/card-element/card-element.component';
import { DashboardProjectsComponent } from '../../components/dashboard-projects/dashboard-projects.component';
import { NgStyle, UpperCasePipe } from '@angular/common';
import { FooterComponent } from '../../components/footer/footer.component';
import { Events, events } from '../../interfaces/events';

@Component({
  selector: 'app-home-screen',
  standalone: true,
  imports: [HeaderComponent,
    CardElementComponent,
    DashboardProjectsComponent,
    UpperCasePipe,
    FooterComponent,
    NgStyle,
  ],
  templateUrl: './home-screen.component.html',
  styleUrl: './home-screen.component.css'
})
export class HomeScreenComponent {
  title: string = 'Nexus Events';
  eventsTpye: Events[] = events;
}
