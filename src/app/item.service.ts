import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ItemService {
  baseUrl = 'http://localhost:8080';
  constructor(private http: HttpClient) { }

  get() {
    return this.http.get(`${this.baseUrl}/items`);
  }

  getItem(id: number) {
    return this.http.get(`${this.baseUrl}/items/${id}`).toPromise();  
  }

  update(id: number, item: IItem) {
    this.http.put(`${this.baseUrl}/items/${id}`, item).subscribe(); 
  }

  add(item: IItem) {
    this.http.post(`${this.baseUrl}/items`, item).subscribe(); 
  }

  delete(id: number) {
    this.http.delete(`${this.baseUrl}/items/${id}`).subscribe(); 
  }
}

export interface IItem {
  id: number;
  description: string;
  weight: number;
  category_id: number;
}