import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
    MatDialogRef,
    MAT_DIALOG_DATA,
} from '@angular/material/dialog';

export interface DialogData {
    name: string;
}

@Component({
    selector: 'app-delete-dialog',
    standalone: true,
    imports: [
        MatDialogActions,
        MatDialogClose,
        MatDialogTitle,
        MatDialogContent,
        MatButtonModule,
    ],
    templateUrl: './delete-dialog.component.html',
    styleUrl: './delete-dialog.component.css',
})
export class DeleteDialogComponent {
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: DialogData,
        public dialogRef: MatDialogRef<DeleteDialogComponent>
    ) {}

    onAccept(): void {
        this.dialogRef.close('accept');
    }

    onClose(): void {
        this.dialogRef.close();
    }
}
