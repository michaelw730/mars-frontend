import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  baseUrl = 'http://localhost:8080';
  constructor(private http: HttpClient) { }

  recreateDatabase() {
    return this.http.post(`${this.baseUrl}/db`, "").subscribe();
  }

  recreateDatabaseSeed() {
    return this.http.post(`${this.baseUrl}/dbseed`, "").subscribe();
  }
}

