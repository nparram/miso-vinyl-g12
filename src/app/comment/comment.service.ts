import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Comment } from './comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private apiUrl:string = environment.baseUrl + 'albums';
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  constructor(private http: HttpClient) { }

  getCommentsByAlbum(idAlbum: number): Observable<Array<Comment>> {
    let urlService = this.apiUrl + '/' + idAlbum + '/comments'
    return this.http.get<Array<Comment>>(urlService).pipe(
      catchError(err => {
        console.log(`En el servicio: ${err.error}`);
        return throwError(err);
      }));

  }

  createCommentInAlbum(newComment: Comment, idAlbum: number): Observable<Comment> {
    let urlService = this.apiUrl + '/' + idAlbum + '/comments'
    return this.http.post<Comment>(urlService, newComment, this.httpOptions)
      .pipe(tap((comment: Comment) => console.log(`added comment w/ id=${comment.id}`)));
  }

}
