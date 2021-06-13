import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StatsService {
  baseUrl = 'http://localhost:8080';
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