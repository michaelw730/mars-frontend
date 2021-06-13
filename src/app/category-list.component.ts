import { Component, SimpleChanges } from '@angular/core';
import { CategoryService } from './category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'mw-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {
  categories;

  constructor(private categoryService:CategoryService,
    private router: Router) {
  }

  async ngOnInit() {
    await this.categoryService.get().subscribe((data) => {
      this.categories = data;
      console.log(data);
    });
  }
/*
  async ngOnChanges(changes: SimpleChanges) {
    if (changes['categories']) {
      await this.categoryService.get().subscribe((data) => {
        this.categories = data;
        console.log(data);
      });
    }
  }
*/
  onCategoryDelete(category) { 
    this.categoryService.delete(category.id);
    this.router.navigate(["listcategories"]);
    location.reload();
  }
}