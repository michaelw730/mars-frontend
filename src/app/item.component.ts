import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { IItem } from './item.service';

@Component({
  selector: 'mw-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  @Input() item: IItem;
  @Output() delete = new EventEmitter();

  constructor(
    private router: Router) {}

  onEdit() {
    this.router.navigate(["updateitem/"+this.item.id]);
  }

  onDelete() {
    this.delete.emit(this.item);
  }
}