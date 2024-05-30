import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { VenueService } from '../../services/venue.service';
import {
    MatExpansionModule,
    MatExpansionPanel,
} from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { Venue } from '../../interfaces/venue';
import { MatToolbar } from '@angular/material/toolbar';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {
    MatPaginator,
    MatPaginatorModule,
    PageEvent,
} from '@angular/material/paginator';
import { FormEventsComponent } from '../form-events/form-events.component';
import { SessionService } from '../../services/session.service';
import { MatTooltip, MatTooltipModule } from '@angular/material/tooltip';

@Component({
    selector: 'app-venues-display',
    standalone: true,
    imports: [
        MatExpansionModule,
        MatCardModule,
        MatExpansionModule,
        MatToolbar,
        MatTooltipModule,
        MatButton,
        MatProgressSpinnerModule,
        MatPaginatorModule,
        MatButtonModule,
        FormEventsComponent,
    ],
    templateUrl: './venues-display.component.html',
    styleUrl: './venues-display.component.css',
})
export class VenuesDisplayComponent implements OnInit {
    @Input() venueId: number = 0;
    isLoading: boolean = true;
    isDisabled: boolean = false;
    venues: Venue[] = [];
    currentPage: number = 0;
    pageSize: number = 7;
    paginatedVenues: Venue[] = [];
    spaceId: number = 0;

    constructor(
        private venueService: VenueService,
        private sessionService: SessionService
    ) {}

    ngOnInit(): void {
        if (this.venueId != 0) {
            this.venueService.getVenues(this.venueId).subscribe({
                next: (data) => {
                    this.venues = data;
                    this.paginatedVenues = this.venues.slice(0, this.pageSize);
                },
                error: (error) => console.log('Error al obtener los espacios'),
            });
        }
        this.isLoading = false;
    }

    handleClick(id: number): void {
        if (this.sessionService.isLogged()) {
            this.spaceId = id;
            this.isDisabled = true;
        }
    }

    onImageError(event: Event): void {
        (event.target as HTMLImageElement).src =
            'http://localhost:3000/imagenes/no_image.jpg';
    }

    paginateVenues() {
        const startIndex = this.currentPage * this.pageSize;
        const endIndex = startIndex + this.pageSize;
        this.paginatedVenues = this.venues.slice(startIndex, endIndex);
    }

    onPageChange(event: PageEvent): void {
        this.pageSize = event.pageSize;
        this.currentPage = event.pageIndex;
        this.paginateVenues();
    }
}
