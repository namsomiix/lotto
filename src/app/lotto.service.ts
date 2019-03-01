import { Injectable } from '@angular/core';
import { Lotto } from './lotto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LottoService {

  constructor(private http:HttpClient) { 
    
  }

  getAll(): Observable<Lotto[]> {
   return this.http.get<Lotto[]>('http://www.mocky.io/v2/5c6bc21c320000fb1cbef5e1');
  }
}
