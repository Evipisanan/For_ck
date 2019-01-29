import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Device} from '../models/Device';
import {catchError, map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  private url = 'http://electo-sensor.herokuapp.com/device/01';
  private url2 = 'http://electo-sensor.herokuapp.com/device/02';
  private clearDataURL = '';

  constructor(private _httpClient: HttpClient) {
  }

  getAllData(): Observable<any> {
    return this._httpClient.get<any>(this.url)
      .pipe(
        tap(_ => console.log('fetched all daily data......')),
        catchError(this.handleError('get all data.......' , []))
      );
  }
  getAllData2(): Observable<any> {
    return this._httpClient.get<any>(this.url2)
      .pipe(
        tap(_ => console.log('fetched all daily data......')),
        catchError(this.handleError('get all data.......' , []))
      );
  }

  // clearData(){
  //   return this._httpClient.post(this.clearDataURL);
  // }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
