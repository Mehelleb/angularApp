import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { JouetComponent } from './jouet/jouet.component';
import { ListeJouetComponent } from './liste-jouet/liste-jouet.component';

@NgModule({
  declarations: [
    AppComponent,
    JouetComponent,
    ListeJouetComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }