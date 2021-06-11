import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
    items: IItem[] = [
        {
            id: 1,
            description: 'Item1',
            weight: 100,
            category_id: 1
        },
        {
            id: 2,
            description: 'Item2',
            weight: 100,
            category_id: 2
        }, {
            id: 3,
            description: 'Item3',
            weight: 100,
            category_id: 3
        }
        ];

  get() {
    return this.items;
  }

  getItem(id: number) {
    var index = null;
    var i =0;
    for (let item of this.items) {
      if (id == item.id) {
        index = i;
      }
      i++;
    }
    return this.items[index];
  }

  add(item) {
    var max_id = null;
    for (let item of this.items) {
      if (max_id == null || max_id < item.id) {
        max_id = item.id;
      }
    }

    max_id = max_id + 1;
    item.id = max_id;
    this.items.push(item);
  }

  update(id: number, item) {
    var index = null;
    var i = 0;
    for (let item of this.items) {
      if (id == item.id) {
        index = i;
      }
      i++;
    }
    
    this.items[index].description = item.description; 
    this.items[index].weight = item.weight;
    this.items[index].category_id = item.category_id;

  }

  delete(item) {
    const index = this.items.indexOf(item);
    if (index >= 0) {
      this.items.splice(index, 1);
    }
  }
}


interface IItem {
  id: number;
  description: string;
  weight: number;
  category_id: number;
}