import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  url: string = "https://picsum.photos/";
  endPoint: string = "v2/list";

  constructor( private httpClient: HttpClient) { }

  // get pictures for the future carousel
  getImages(){
    const HTTPOPTIONS = {
      params: new HttpParams().set('page', '65').set('limit', '3')
    }
    console.log(this.httpClient.get(`${this.url}${this.endPoint}`, HTTPOPTIONS));
    return this.httpClient.get(`${this.url}${this.endPoint}`, HTTPOPTIONS);
  }
}
