import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { ConcertComponent } from './concert/concert.component';
import { ArtistComponent } from './artist/artist.component';
import { ArtistserviceService } from './artistservice.service';
import { ConcertserviceService } from './concertservice.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ConcertComponent,
    ArtistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ArtistserviceService, ConcertserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
