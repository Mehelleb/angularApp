import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { JouetComponent } from './jouet/jouet.component';
import { ListeJouetComponent } from './liste-jouet/liste-jouet.component';
import { HeaderComponent } from './header/header.component';
import { Rooting } from './rooting';
import { HomeComponent } from './home/home.component';
import { JouetUniqueComponent } from './jouet-unique/jouet-unique.component';

@NgModule({
  declarations: [
    AppComponent,
    JouetComponent,
    ListeJouetComponent,
    HeaderComponent,
    HomeComponent,
    JouetUniqueComponent
  ],
  imports: [
    BrowserModule,
    Rooting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
