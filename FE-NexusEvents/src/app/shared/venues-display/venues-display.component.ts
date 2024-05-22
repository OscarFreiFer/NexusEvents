import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { VenueService } from '../../services/venue.service';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { Venue } from '../../interfaces/venue';
import { MatToolbar } from '@angular/material/toolbar';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {
    StepperOrientation,
    MatStepperModule,
} from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import {
    MatPaginator,
    MatPaginatorModule,
    PageEvent,
} from '@angular/material/paginator';
import {
    FormBuilder,
    FormsModule,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Observable, map } from 'rxjs';
import { BreakpointObserver } from '@angular/cdk/layout';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-venues-display',
    standalone: true,
    imports: [
        MatExpansionModule,
        MatCardModule,
        MatExpansionModule,
        MatToolbar,
        MatButton,
        MatProgressSpinnerModule,
        MatPaginatorModule,
        FormsModule,
        ReactiveFormsModule,
        MatStepperModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        AsyncPipe,
    ],
    templateUrl: './venues-display.component.html',
    styleUrl: './venues-display.component.css',
})
export class VenuesDisplayComponent implements OnInit {
    firstFormGroup = this._formBuilder.group({
        firstCtrl: ['', Validators.required],
    });
    secondFormGroup = this._formBuilder.group({
        secondCtrl: ['', Validators.required],
    });
    thirdFormGroup = this._formBuilder.group({
        thirdCtrl: ['', Validators.required],
    });
    stepperOrientation: Observable<StepperOrientation>;

    @Input() venueId: number = 0;
    isLoading: boolean = true;
    venues: Venue[] = [];
    currentPage: number = 0;
    pageSize: number = 7;
    paginatedVenues: Venue[] = [];

    @ViewChild(MatPaginator) paginator!: MatPaginator;

    constructor(
        private venueService: VenueService,
        private _formBuilder: FormBuilder,
        breakpointObserver: BreakpointObserver
    ) {
        this.stepperOrientation = breakpointObserver
            .observe('(min-width: 800px)')
            .pipe(map(({ matches }) => (matches ? 'horizontal' : 'vertical')));
    }

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
