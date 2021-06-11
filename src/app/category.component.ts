import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mw-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  @Input() category;
  @Output() delete = new EventEmitter();

  onDelete() {
    this.delete.emit(this.category);
  }
}