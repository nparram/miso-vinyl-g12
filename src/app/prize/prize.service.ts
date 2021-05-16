import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PrizeDetail } from './prizeDetail';
import { environment } from '../../environments/environment';
import { catchError, tap } from 'rxjs/operators';
import { Prize } from './prize';



@Injectable({
  providedIn: 'root'
})

export class PrizeService {

  private apiUrl = environment.baseUrl + 'prizes';
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };
  constructor(private http: HttpClient) { }

  getPrizes(): Observable<Array<PrizeDetail>> {
    console.log(`Url back: ${this.apiUrl}`);
    return this.http.get<Array<PrizeDetail>>(this.apiUrl);
  }

  createPrize(newPrize: Prize): Observable<Prize> {
    return this.http.post<Prize>(this.apiUrl, newPrize, this.httpOptions)
      .pipe(tap((prize: Prize) => console.log(`added prize w/ ${prize.name} id=${prize.id}`)));
  }


}

