import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AlbumDetail } from './albumDetail';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private apiUrl:string = environment.baseUrl + 'albums';

  constructor(private http: HttpClient) { }

  getAlbums(): Observable<Array<AlbumDetail>> {
    //ToDo Array<AlbumDetail>
    return this.http.get<Array<AlbumDetail>>(this.apiUrl).pipe(
      catchError(err => {
        console.log(`En el servicio: ${err.error}`);
        return throwError(err);
      }));
  }

}
