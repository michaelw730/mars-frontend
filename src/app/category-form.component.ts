import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from './category.service';

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
    private route: ActivatedRoute) {

      
    }

  ngOnInit() {
    //check route if add or update
    if (this.router.url.includes("updatecategory") === true) {
      //TODO: error checking
      this.id = this.route.snapshot.params.id;
      this.action = "Update";

      this.fetchCategory();
      setTimeout(() => {  console.log("World!"); }, 20000);
      /*
      console.log("asda3");
      console.log(this.category);
      console.log("asda4");
      */
      this.name = this.category.name;
      this.priority = this.category.priority;
      console.log(this.category);
      
    }
    

    this.form = this.formBuilder.group({
      name: this.formBuilder.control(this.name, Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      priority: this.formBuilder.control(this.priority)
    });
  }

  fetchCategory() {
    this.categoryService.getCategory(this.id).subscribe((data) => {
      this.category = data;
      console.log("asda1");
      console.log(this.category)
      console.log("asda2");
      return data;
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
