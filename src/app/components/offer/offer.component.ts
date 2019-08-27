import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {

    constructor(
        public dialogRef: MatDialogRef<OfferComponent>) { }

    ngOnInit() {
    }

    public closeDialogClicked() {
        this.dialogRef.close();
    }
}
