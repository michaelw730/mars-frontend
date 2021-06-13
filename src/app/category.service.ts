import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { map, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  baseUrl = 'http://localhost:8080';
  data;

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get(`${this.baseUrl}/categories`);
  }

  getCategory(id: number) {
    return this.http.get(`${this.baseUrl}/categories/${id}`).toPromise();  
  }

  update(id: number, category) {
    this.http.put(`${this.baseUrl}/categories/${id}`, category).subscribe(); 
  }

  add(category) {
    this.http.post(`${this.baseUrl}/categories`, category).subscribe(); 
  }

  delete(id) {
    this.http.delete(`${this.baseUrl}/categories/${id}`).subscribe(); 
  }
}


interface CategoriesResponse {
  categories: ICategory[];
}

export interface ICategory {
  id: number;
  name: string;
  priority: number;
}