import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
// Users experience
import { ToastrService } from 'ngx-toastr';
// rxjs
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
// models
import { fakeBands, Mybands } from '../models/DTOs/mybands';


@Injectable({
  providedIn: 'root'
})
export class AllbandsService {
  // fake api online
  private ROOT_URL: string = "https://my-json-server.typicode.com/ToursByMe/myBands/bands";
  private CREATE_URL: string = "https://my-json-server.typicode.com/ToursByMe/myBands"

  // errors
  private errorsMessage: string = "";

  // httpOptions
  httpOptions = {
    headers: new HttpHeaders ({
      'Content-Type': "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "http://localhost:4500",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
      // "Access-Control-Allow-Origin": "*"
    })
  }
  constructor(private http: HttpClient,
              private toastr: ToastrService,
              private route: Router) { }
// fake api json
// get all list
  getAllBands() {
   return this.http.get<Mybands[]>(this.ROOT_URL, this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   );
  }
  // get one
  getOneBand(id: string) {
    return this.http.get<Mybands[]>(`${this.ROOT_URL}/${id}`, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    );
  }
  // delete one
  deleteBand(id: string){
    return this.http.delete<Mybands>(`${this.ROOT_URL}/${id}`, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    );
  }
  // new one
  createBand(band: Mybands): Observable<Mybands> {
    return this.http.post<Mybands>(`${this.CREATE_URL}/bands`, JSON.stringify(band), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    );
  }
// update one
updateBand(id: string, band?: Mybands): Observable<Mybands> {
return this.http.put<Mybands>(`${this.ROOT_URL}/${id}`, JSON.stringify(band), this.httpOptions)
.pipe(
  catchError(this.errorHandler)
);
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
// errors
errorHandler(error: string | any) {
  if (error.error instanceof ErrorEvent) {
    this.errorsMessage = "An unexpected error has happened. \n You'll be redirected to Home page";
    this.toastr.error(this.errorsMessage, "Unexpected error");
    // redirect home
    this.route.navigate(['/home']);
  } else {
    console.log(`Error status: ${error.status} ${error.statusText} \n Error message: ${error.message}` );
    switch(error.status) {
      case 401: // unauthorized
            this.errorsMessage = "Unauthorized. Please, return to Home Page.";
            this.toastr.error(this.errorsMessage, "Unauthorized");
            this.route.navigate(['/home']);
          break;

       case 403: // forbidden
            this.errorsMessage = "Access to this resource is forbidden.";
            this.toastr.error(this.errorsMessage, "Forbidden");
            this.route.navigate(['/bands']);
          break;

        case 404: // not found
            this.errorsMessage = "The requested resource was NOT found.";
            this.toastr.error(this.errorsMessage, "Not Found");
            this.route.navigate(['/bands']);
          break;

         case 422: // band already exists
            this.errorsMessage = "Band already in the database.";
            this.toastr.error(this.errorsMessage, "Band in database");
            this.route.navigate(['/bands']);
          break;

          default:
              // other errors
              this.errorsMessage = "Unexpected Error.\n You'll be redirected to Home page";
              this.toastr.error(this.errorsMessage, "Other Erros");
              this.route.navigate(['/home']);
              break;

    }
  }
  return throwError(new Error(this.errorsMessage));
}
}
