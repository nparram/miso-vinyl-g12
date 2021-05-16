import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { PerformerDetail } from './performerDetail';
import { environment } from '../../environments/environment';
import { catchError, tap } from 'rxjs/operators';
import { Performer } from './performer';

@Injectable({
  providedIn: 'root'
})
export class PerformerService {
  private apiUrl:string = environment.baseUrl + 'musicians';
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };
  constructor(private http: HttpClient) { }
  getPerformer(): Observable<Array<PerformerDetail>> {
    console.log(`Url back: ${this.apiUrl}`);
    return this.http.get<Array<PerformerDetail>>(this.apiUrl);
  }

  createPerformer(newPerformer: Performer): Observable<Performer> {
    return this.http.post<Performer>(this.apiUrl, newPerformer, this.httpOptions)
      .pipe(tap((performer: Performer) => console.log(`added performer w/ ${performer.name} id=${performer.id}`)));
  }

}





