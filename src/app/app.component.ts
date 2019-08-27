import { Component } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OfferComponent } from './../app/components/offer/offer.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'petamins';

    constructor(public dialog: MatDialog) {
        this.openDialog();
    }

    ngOnInit() {

    }

    public openDialog() {
        const dialogRef = this.dialog.open(OfferComponent, {
            width: '50%',
            height: '50%'
        });

        dialogRef.afterClosed().subscribe(result => {
            // do something after
        });
    }
}
