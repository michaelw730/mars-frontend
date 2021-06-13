import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from './category.service';

import { map, delay } from "rxjs/operators";

@Component({
  selector: 'mw-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {
  form: FormGroup;
  categories;
  id;
  action = "Add";
  category;
  name = "";
  priority = "";

  constructor(
    private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit() {
    //check route if add or update
    if (this.router.url.includes("updatecategory") === true) {
      //TODO: error checking
      this.id = this.route.snapshot.params.id;
      this.action = "Update"; 
      this.fetchCategory();
    } 
    
    this.setUpForm();
  }

  setUpForm() {
    this.form = this.formBuilder.group({
      name: this.formBuilder.control(this.name, Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      priority: this.formBuilder.control(this.priority)
    });
  }

  async fetchCategory() {
    await this.categoryService.getCategory(this.id)
     .then((data) => {
      this.category = data;
      this.name = this.category.name;
      this.priority = this.category.priority;
      this.setUpForm();
    });    
  }

  onSubmit(category) {
    console.log (category);
    if (this.action == "Add") {
      this.categoryService.add(category);
    } else {
      this.categoryService.update(this.id, category);
    }
    this.router.navigate(["listcategories"]);
  }
}
