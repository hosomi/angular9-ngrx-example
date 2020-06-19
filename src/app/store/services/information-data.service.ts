import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, delay, map } from 'rxjs/operators';
import { Information } from 'src/app/shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class InformationDataService {

  apiUrlBase = environment.apiUrlBase;
  
  constructor(private http:HttpClient) { }

  getInformations(): Observable<Information[]>{

    console.log(`${this.apiUrlBase}/informations`);

    return this.http.get<Information[]>(`${this.apiUrlBase}/informations`)
    .pipe(
      catchError(this.HandleError())
    );
  }

  getInformation(Id: number): Observable<Information> {
console.log("💩getInformation=>", Id);
console.log(`${this.apiUrlBase}/informations/${Id}`);
    return this.http.get<Information>(`${this.apiUrlBase}/informations/${Id}`)
    .pipe(
      catchError(this.HandleError())
    );
  }
  
  addInformation(information: Information): Observable<Information> {
    return this.http.post<Information>(`${this.apiUrlBase}/informations/`, information)
    .pipe(
      catchError(this.HandleError(information))
    );
  }

  deleteInformation(information: Information): Observable<Information> {
    return this.http.delete(`${this.apiUrlBase}/informations/${information.id}`)
    .pipe(
      map(() => information),
      catchError(this.HandleError(information))
    );
  }

  updateInformation(information: Information): Observable<Information> {
    return this.http.put<Information>(`${this.apiUrlBase}/informations/${information.id}`, information)
    .pipe(
      map(() => information),
      catchError(this.HandleError(information))
    );
  }

  private HandleError<T>(requestData?: T) {
    return (res: HttpErrorResponse) => {
      console.error(res);
      console.error(res.message);
        console.error(res.error);
      return throwError(res.error);
    };
  }
}
