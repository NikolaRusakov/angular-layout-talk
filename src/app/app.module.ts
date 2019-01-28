import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent, ExampleDialogComponent} from './app.component';
import {HelloComponent} from './hello.component';
import {CUSTOM_BREAKPOINTS} from './breakpoints';
import {CustomLayoutDirective} from './breakpoints';
import {FlexLayoutModule} from '@angular/flex-layout'
import {CustomClassDirective} from "./custom-class";
import {CustomStyleDirective} from "./custom-style";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {CommonModule} from '@angular/common';
import {CustomFlexDirective} from "./custom-flex";
import {MatSidenavModule} from '@angular/material/sidenav';
import {CustomShowHideDirective} from "./custom-show-hide";
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import {CustomImgSrcDirective} from "./custom-img-src";

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        FlexLayoutModule.withConfig({
            useColumnBasisZero: true,
            printWithBreakpoints: ['xsc', 'smc', 'mdc', 'lgc'],
            disableDefaultBps: false
        }, CUSTOM_BREAKPOINTS),
        BrowserAnimationsModule,
        MatButtonModule,
        MatCardModule,
        MatSidenavModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule
    ],
    declarations: [
        AppComponent,
        HelloComponent,
        CustomLayoutDirective,
        CustomClassDirective,
        CustomStyleDirective,
        CustomFlexDirective,
        CustomShowHideDirective,
        CustomImgSrcDirective,
        ExampleDialogComponent
    ],
    entryComponents: [ExampleDialogComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
