import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  baseUrl = 'http://localhost:8080';
  data;

  constructor(private http: HttpClient) { }

    categories = [
        {
            id: 1,
            name: 'Cat1',
            priority: 1
        },
        {
            id: 2,
            name: 'Cat2',
            priority: 2
        },
        {
            id: 3,
            name: 'Cat3',
            priority: 3
        },
        {
            id: 4,
            name: 'Cat4',
            priority: 4
        },
        {
            id: 5,
            name: 'Cat5',
            priority: 5
        }
    ];

  get() {
    return this.http.get(`${this.baseUrl}/categories`);
  }

  getCategory(id: number) {
    return this.http.get(`${this.baseUrl}/categories/${id}`);
  }

  update(id: number, category) {
    var index = null;
    var i =0;
    for (let category of this.categories) {
      if (id == category.id) {
        index = i;
      }
      i++;
    }
    
    this.categories[index].name = category.name; 
    this.categories[index].priority = category.priority;
  }

  add(category) {
    var max_id = null;
    for (let category of this.categories) {
      if (max_id == null || max_id < category.id) {
        max_id = category.id;
      }
    }

    max_id = max_id + 1;
    category.id = max_id;

    this.categories.push(category);
  }

  delete(category) {
    const index = this.categories.indexOf(category);
    if (index >= 0) {
      this.categories.splice(index, 1);
    }
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