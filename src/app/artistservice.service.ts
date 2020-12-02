import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArtistserviceService {

  constructor(private httpclient: HttpClient) { }

  getAllArtists(){
    console.log(this.httpclient.get('/server/server/v1/api/main/allartists'));
    return this.httpclient.get('/server/server/v1/api/main/allartists');
  }

}
