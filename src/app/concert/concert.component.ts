import { Component, OnInit } from '@angular/core';
import { ConcertserviceService } from '../concertservice.service';

@Component({
  selector: 'app-concert',
  templateUrl: './concert.component.html',
  styleUrls: ['./concert.component.scss']
})
export class ConcertComponent implements OnInit {

  public concerts;

  constructor(private service: ConcertserviceService) { }

  ngOnInit(): void {
    this.getConcerts();
  }

  getConcerts() {
    this.concerts = this.service.getAllConcerts();
  }

}
