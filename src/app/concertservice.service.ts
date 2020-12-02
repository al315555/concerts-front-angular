import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConcertserviceService {

  constructor(private httpclient: HttpClient) { }

  getAllConcerts() {
    return this.httpclient.get('/server/server/v1/api/main/allconcerts');
  }
}
