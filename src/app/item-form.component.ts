import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ItemService, IItem } from './item.service';
import { CategoryService } from './category.service';

@Component({
  selector: 'mw-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {
  form: FormGroup;
  categories: any;
  id: number;
  action = "Add";
  item: any;
  description: string = "";
  weight: number;
  category_id: number;

  constructor(
    private formBuilder: FormBuilder,
    private itemService: ItemService,
    private categoryService: CategoryService,
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit() {
    //check route if add or update
    if (this.router.url.includes("updateitem") === true) {
      //TODO: error checking
      this.id = this.route.snapshot.params.id;
      this.action = "Update";
      this.fetchItem();
    } 
    this.setUpForm();
  }

  setUpForm() {
    this.fetchCategories();
    this.form = this.formBuilder.group({
      description: this.formBuilder.control(this.description, Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      weight: this.formBuilder.control(this.weight),
      category_id: this.formBuilder.control([this.category_id])
    });
  }

  async fetchItem() {
    await this.itemService.getItem(this.id)
     .then((data) => {
      this.item = data;
      this.description = this.item.description;
      this.weight = this.item.weight;
      this.category_id = this.item.category_id;
      this.setUpForm();
      console.log(data);
    });    
  }

  fetchCategories() {
    this.categoryService.get()
     .subscribe((data) => {
      this.categories = data;
    });    
  }

  onSubmit(item: IItem) {
    console.log (item);
    if (this.action == "Add") {
      this.itemService.add(item);
    } else {
      this.itemService.update(this.id, item);
    }
    this.router.navigate(["listitems"]);
  }
}
