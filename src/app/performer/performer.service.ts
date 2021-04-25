import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Performer } from './performer';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PerformerService {
  private apiUrl:string = environment.baseUrl + 'performers';
  constructor(private http: HttpClient) { }
  getPerformer(): Observable<Array<Performer>> {
    console.log(`Url back: ${this.apiUrl}`);
    return this.http.get<Array<Performer>>(this.apiUrl);
  }

}

