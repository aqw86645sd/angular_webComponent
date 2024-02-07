import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ChartBarComponent } from './chart-bar.component';

@NgModule({
  declarations: [
    ChartBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ChartBarComponent]
})
export class AppModule { }
