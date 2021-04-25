import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Prize } from './prize';
import { environment } from '../../environments/environment';



@Injectable({
  providedIn: 'root'
})

export class PrizeService {

  private apiUrl = environment.baseUrl + 'prizes';
  constructor(private http: HttpClient) { }

  getPrizes(): Observable<Array<Prize>> {
    console.log(`Url back: ${this.apiUrl}`);
    return this.http.get<Array<Prize>>(this.apiUrl);
  }

}
