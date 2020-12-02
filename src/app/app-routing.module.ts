import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ConcertComponent } from './concert/concert.component';
import { ArtistComponent } from './artist/artist.component';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent
  },
  {
    path: 'concerts',
    component: ConcertComponent
  },
  {
    path: 'artists',
    component: ArtistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
