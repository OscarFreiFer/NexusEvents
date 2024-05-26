import { BreakpointObserver } from '@angular/cdk/layout';
import { Component } from '@angular/core';
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
export class FormEventsComponent {
    firstFormGroup = this._formBuilder.group({
        firstCtrl: ['', Validators.required],
    });
    secondFormGroup = this._formBuilder.group({
        start: ['', Validators.required],
        end: ['', Validators.required],
    });
    thirdFormGroup = this._formBuilder.group({
        thirdCtrl: ['', Validators.required],
    });
    stepperOrientation: Observable<StepperOrientation>;

    minDate: Date = new Date();

    constructor(
        private venueService: VenueService,
        private _formBuilder: FormBuilder,
        breakpointObserver: BreakpointObserver
    ) {
        this.stepperOrientation = breakpointObserver
            .observe('(min-width: 1024px)')
            .pipe(map(({ matches }) => (matches ? 'horizontal' : 'vertical')));
        /*         const currentDate = new Date().toISOString();
        this.minDate = new Date(currentDate); */
        console.log(this.minDate);
    }

    dateFilter(date: Date): boolean {
        console.log(date.getDate());
        return date.getDate() != 29;
    }

    onSubmit() {
        console.log(this.minDate);
    }
}
