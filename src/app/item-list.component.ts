import { Component/*, SimpleChanges*/ } from '@angular/core';
import { ItemService, IItem } from './item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'mw-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {
  items: any;

  constructor(private itemService: ItemService,
    private router: Router
    ) {}

    /*async */ngOnInit() {
      /*await*/ this.itemService.get().subscribe((data) => {
        this.items = data;
        console.log(data);
      });
    }
  /*
    async ngOnChanges(changes: SimpleChanges) {
      if (changes['items']) {
        await this.itemService.get().subscribe((data) => {
          this.items = data;
          console.log(data);
        });
      }
    }
  */
    onItemDelete(items: IItem) { 
      this.itemService.delete(items.id);
      this.router.navigate(["listitems"]);
      location.reload();
    }
}