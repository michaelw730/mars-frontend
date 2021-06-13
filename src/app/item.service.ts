import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { map, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  baseUrl = 'http://localhost:8080';
  data;

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get(`${this.baseUrl}/items`);
  }

  getItem(id: number) {
    return this.http.get(`${this.baseUrl}/items/${id}`).toPromise();  
  }

  update(id: number, category) {
    this.http.put(`${this.baseUrl}/items/${id}`, category).subscribe(); 
  }

  add(category) {
    this.http.post(`${this.baseUrl}/items`, category).subscribe(); 
  }

  delete(id) {
    this.http.delete(`${this.baseUrl}/items/${id}`).subscribe(); 
  }
}

interface IItem {
  id: number;
  description: string;
  weight: number;
  category_id: number;
}