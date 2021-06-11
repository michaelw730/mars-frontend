import { Component } from '@angular/core';
import { ItemService } from './item.service';
//import { CategoryService } from './category.service';

@Component({
  selector: 'mw-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {
  items;
  categories;

  constructor(private itemService: ItemService,
    //private categoryService: CategoryService
    ) {}

  ngOnInit() {
    this.items = this.itemService.get();
    //this.categories = this.categoryService.get();
  }

  onItemDelete(item) { 
    this.itemService.delete(item);
  }
}