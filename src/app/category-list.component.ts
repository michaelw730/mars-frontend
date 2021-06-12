import { Component } from '@angular/core';
import { CategoryService } from './category.service';

@Component({
  selector: 'mw-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {
  categories;

  constructor(private categoryService:CategoryService) {
  }

  ngOnInit() {
    this.categoryService.get().subscribe((data) => {
      this.categories = data;
      console.log(data);
    });
    //this.categories = this.categoryService.get();
    //console.log(this.categories)
  }

  onCategoryDelete(category) { 
    this.categoryService.delete(category);
  }
}