import { Component, OnInit } from '@angular/core';
import { ArtistserviceService } from '../artistservice.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {

  public artists;

  constructor(private service: ArtistserviceService) { }

  ngOnInit(): void {
    this.getArtists();
  }

  getArtists() {
    this.artists = this.service.getAllArtists();
  }

}
