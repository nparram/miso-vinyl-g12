import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PrizeDetail } from './prizeDetail';
import { environment } from '../../environments/environment';



@Injectable({
  providedIn: 'root'
})

export class PrizeService {

  private apiUrl = environment.baseUrl + 'prizes';
  constructor(private http: HttpClient) { }

  getPrizes(): Observable<Array<PrizeDetail>> {
    console.log(`Url back: ${this.apiUrl}`);
    return this.http.get<Array<PrizeDetail>>(this.apiUrl);
  }

}
