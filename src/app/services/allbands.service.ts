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
  getAllBands() {
    return this.http.get<Mybands[]>(this.ROOT_URL);
  }
  getOneBand(id: string) {
    return this.http.get<Mybands[]>(`${this.ROOT_URL}/${id}`);
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
