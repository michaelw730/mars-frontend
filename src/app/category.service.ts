import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
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
    return this.categories;
  }

  add(category) {
    this.categories.push(category);
  }

  delete(category) {
    const index = this.categories.indexOf(category);
    if (index >= 0) {
      this.categories.splice(index, 1);
    }
  }
}