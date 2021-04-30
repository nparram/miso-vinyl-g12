import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AlbumDetail } from './albumDetail';


@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private apiUrl:string = environment.baseUrl + 'albums';

  constructor(private http: HttpClient) { }

  getAlbums(): Observable<AlbumDetail[]> {
    return this.http.get<AlbumDetail[]>(this.apiUrl);
  }

}
