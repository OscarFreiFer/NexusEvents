import { BreakpointObserver } from '@angular/cdk/layout';
import {
    Component,
    Input,
    OnChanges,
    OnInit,
    SimpleChanges,
} from '@angular/core';
import {
    FormBuilder,
    FormsModule,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { VenueService } from '../../services/venue.service';
import { Observable, map } from 'rxjs';
import {
    STEPPER_GLOBAL_OPTIONS,
    StepperOrientation,
} from '@angular/cdk/stepper';
import { AsyncPipe, DatePipe } from '@angular/common';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import flatpickr from 'flatpickr';
import { EventsService } from '../../services/events.service';
import { DateEvents } from '../../interfaces/date-events';
import { Events } from '../../interfaces/events';
import { SessionService } from '../../services/session.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-form-events',
    standalone: true,
    providers: [
        {
            provide: STEPPER_GLOBAL_OPTIONS,
            useValue: { showError: true },
        },
        provideNativeDateAdapter(),
    ],
    imports: [
        AsyncPipe,
        MatStepperModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatDatepickerModule,
        DatePipe,
    ],
    templateUrl: './form-events.component.html',
    styleUrl: './form-events.component.css',
})
export class FormEventsComponent implements OnInit, OnChanges {
    @Input() spaceId: number = 0;
    disabledDates: Date[] = [];
    minDate: Date = new Date();

    firstFormGroup = this._formBuilder.group({
        firstCtrl: ['', Validators.required],
    });
    secondFormGroup = this._formBuilder.group({
        rangeCtrl: ['', Validators.required],
    });
    thirdFormGroup = this._formBuilder.group({
        thirdCtrl: ['', Validators.required],
    });
    stepperOrientation: Observable<StepperOrientation>;

    constructor(
        private sessionService: SessionService,
        private _formBuilder: FormBuilder,
        private eventsService: EventsService,
        breakpointObserver: BreakpointObserver
    ) {
        this.stepperOrientation = breakpointObserver
            .observe('(min-width: 1024px)')
            .pipe(map(({ matches }) => (matches ? 'horizontal' : 'vertical')));
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.eventsService.getDateEvents(this.spaceId).subscribe({
            next: (data: any) => {
                this.disabledDates = this.generateDisabledDates(data);
                flatpickr('#fecha' + this.spaceId, {
                    mode: 'range',
                    minDate: 'today',
                    dateFormat: 'm-d-y',
                    disable: this.disabledDates,
                });
            },
        });
    }

    ngOnInit(): void {}

    ngAfterViewInit() {}

    // Genera un array de fechas deshabilitadas a partir de los rangos de fechas
    private generateDisabledDates(dateRanges: DateEvents[]): Date[] {
        const disabledDates: Date[] = [];
        dateRanges.forEach((range) => {
            const startDate = new Date(range.startDate);
            const endDate = new Date(range.endDate);
            let currentDate = new Date(startDate);

            // Solo incluir fechas que son posteriores a minDate
            if (currentDate < this.minDate) {
                currentDate = new Date(this.minDate);
            }

            while (currentDate <= endDate) {
                disabledDates.push(new Date(currentDate));
                currentDate.setDate(currentDate.getDate() + 1);
            }
        });
        return disabledDates;
    }

    onSubmit() {
        if (
            this.firstFormGroup.valid &&
            this.secondFormGroup.valid &&
            this.thirdFormGroup.valid
        ) {
            var rangeDates = this.secondFormGroup.value?.rangeCtrl?.split(' ');
            var startDate: Date = new Date();
            var endDate: Date = new Date();
            if (rangeDates) {
                startDate = new Date(rangeDates[0]);
                endDate = new Date(rangeDates[rangeDates.length - 1]);
            }
            const eventCreated: Events = {
                name: this.firstFormGroup.value?.firstCtrl,
                startDate: startDate,
                endDate: endDate,
                description: this.thirdFormGroup.value?.thirdCtrl,
                imageUrl: null,
                spaceId: this.spaceId,
                userId: this.sessionService.getUserId(),
            };
            this.eventsService.postEvent(eventCreated).subscribe({
                next: () => {
                    this.firstFormGroup.reset();
                    this.secondFormGroup.reset();
                    this.thirdFormGroup.reset();
                },
                error: (error) =>
                    console.log('Error al crear el evento', error),
            });
        }
    }
}
