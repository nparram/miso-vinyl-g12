import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AlbumDetail } from './albumDetail';
import { catchError, tap } from 'rxjs/operators';
import { Album } from './album';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private apiUrl:string = environment.baseUrl + 'albums';
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  constructor(private http: HttpClient) { }

  getAlbums(): Observable<Array<AlbumDetail>> {
    //ToDo Array<AlbumDetail>
    return this.http.get<Array<AlbumDetail>>(this.apiUrl).pipe(
      catchError(err => {
        console.log(`En el servicio: ${err.error}`);
        return throwError(err);
      }));
  }

  createAlbum(newAlbum: Album): Observable<Album> {
    return this.http.post<Album>(this.apiUrl, newAlbum, this.httpOptions)
      .pipe(tap((album: Album) => console.log(`added album w/ ${album.name} id=${album.id}`)));
  }

}
