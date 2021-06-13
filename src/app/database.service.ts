import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { map, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  baseUrl = 'http://localhost:8080';
  data;

  constructor(private http: HttpClient) { }

  recreateDatabase() {
    return this.http.post(`${this.baseUrl}/db`, "").subscribe();
  }

  recreateDatabaseSeed() {
    return this.http.post(`${this.baseUrl}/dbseed`, "").subscribe();
  }
}

