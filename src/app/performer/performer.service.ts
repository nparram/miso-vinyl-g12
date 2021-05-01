import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PerformerDetail } from './performerDetail';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PerformerService {
  private apiUrl:string = environment.baseUrl + 'musicians';
  constructor(private http: HttpClient) { }
  getPerformer(): Observable<Array<PerformerDetail>> {
    console.log(`Url back: ${this.apiUrl}`);
    return this.http.get<Array<PerformerDetail>>(this.apiUrl);
  }

}

