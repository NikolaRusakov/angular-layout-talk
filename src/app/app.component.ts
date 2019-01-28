import {MediaChange, MediaObserver} from '@angular/flex-layout';
import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


export interface DialogData {
    animal: string;
    name: string;
}

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    animal: string;
    name: string;

    arr = new Array(5);
    bp: MediaChange

    constructor(public dialog: MatDialog,
                public media: MediaObserver) {
        media.media$.subscribe((change: MediaChange) => {
            console.log(change);
            this.bp = change
        })
    }

    openDialog(): void {
        const dialogRef = this.dialog.open(ExampleDialogComponent, {
            width: '250px',
            data: {name: this.name, animal: this.animal}
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.animal = result;
        });
    }
}

@Component({
    selector: 'example-dialog',
    templateUrl: 'example-dialog.html',
})
export class ExampleDialogComponent {

    constructor(
        public dialogRef: MatDialogRef<ExampleDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

}

