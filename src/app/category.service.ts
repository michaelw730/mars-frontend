import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  baseUrl = 'http://localhost:8080';
  data: ICategory;

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get(`${this.baseUrl}/categories`);
  }

  getCategory(id: number) {
    return this.http.get(`${this.baseUrl}/categories/${id}`).toPromise();  
  }

  update(id: number, category: ICategory) {
    this.http.put(`${this.baseUrl}/categories/${id}`, category).subscribe(); 
  }

  add(category: ICategory) {
    this.http.post(`${this.baseUrl}/categories`, category).subscribe(); 
  }

  delete(id: number) {
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