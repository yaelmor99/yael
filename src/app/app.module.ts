import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { C1Component } from './comps/c1/c1.component';
import { C2Component } from './comps/c2/c2.component';
import { C3Component } from './comps/c3/c3.component';
import { C4Component } from './comps/c4/c4.component';
import { C5Component } from './comps/c5/c5.component';
import { C6Component } from './comps/c6/c6.component';
import { C7Component } from './comps/c7/c7.component';
import { C8Component } from './comps/c8/c8.component';
import { C9Component } from './comps/c9/c9.component';
import { C10Component } from './comps/c10/c10.component';

@NgModule({
  declarations: [
    AppComponent,
    C1Component,
    C2Component,
    C3Component,
    C4Component,
    C5Component,
    C6Component,
    C7Component,
    C8Component,
    C9Component,
    C10Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
