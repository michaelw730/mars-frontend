import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ICategory } from './category.service';

@Component({
  selector: 'mw-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  @Input() category: ICategory;
  @Output() delete = new EventEmitter();

  constructor(
    private router: Router) {}

  onEdit() {
    this.router.navigate(["updatecategory/"+this.category.id]);
  }

  onDelete() {
    this.delete.emit(this.category);
  }
}