import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { fakeBands, Mybands } from '../models/DTOs/mybands';


@Injectable({
  providedIn: 'root'
})
export class AllbandsService {
  // fake api online
  private ROOT_URL: string = "https://my-json-server.typicode.com/ToursByMe/myBands/bands";

  constructor(private http: HttpClient) { }
// fake api json
// get all list
  getAllBands() {
    return this.http.get<Mybands[]>(this.ROOT_URL);
  }
  // get one
  getOneBand(id: string) {
    return this.http.get<Mybands[]>(`${this.ROOT_URL}/${id}`);
  }
  // delete one
  deleteBand(id: string){
    return this.http.delete<Mybands[]>(`${this.ROOT_URL}/${id}`);
  }
// update one
updateBand(id: string) {
  console.log('I need a body request');
}
  // from my db.json
  getBands() {
    console.log(fakeBands);
    return of(fakeBands)
  }
  getBand(id: string){
    return of(
      fakeBands.find(band => band.id === id)
    );
  }
}
