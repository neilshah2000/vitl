import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { HeaderComponent } from './components/header/header.component';
import { LandingComponent } from './components/landing/landing.component';
import { WorksComponent } from './components/works/works.component';
import { MadeComponent } from './components/made/made.component';
import { FooterComponent } from './components/footer/footer.component';
import { OfferComponent } from './components/offer/offer.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        LandingComponent,
        WorksComponent,
        MadeComponent,
        FooterComponent,
        OfferComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatDialogModule,
        MatToolbarModule,
        FlexLayoutModule
    ],
    providers: [],
    bootstrap: [AppComponent],
    entryComponents: [OfferComponent]
})
export class AppModule { }
