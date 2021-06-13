import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { map, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StatsService {
  baseUrl = 'http://localhost:8080';
  data;

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get(`${this.baseUrl}/stats`);
  }
}

interface StatsResponse {
  categories: IStat[];
}

export interface IStat {
  category_name: string;
  sum_weight: number;
}