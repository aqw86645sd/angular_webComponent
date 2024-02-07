import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ChartLineComponent } from './chart-line.component';

@NgModule({
  declarations: [
    ChartLineComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ChartLineComponent]
})
export class AppModule { }
