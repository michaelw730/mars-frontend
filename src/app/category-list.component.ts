import { Component } from '@angular/core';
import { CategoryService } from './category.service';

@Component({
  selector: 'mw-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {
  categories;

  constructor(private categoryService:CategoryService) {}

  ngOnInit() {
    this.categories = this.categoryService.get();
  }

  onCategoryDelete(category) { 
    this.categoryService.delete(category);
  }
}