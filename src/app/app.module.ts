//modules (imports)
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
//components (declarations)
import { AppComponent } from './app.component';
import { CategoryFormComponent } from './category-form.component';
import { ItemFormComponent } from './item-form.component';
import { CategoryListComponent } from './category-list.component';
import { ItemListComponent } from './item-list.component';
import { CategoryComponent } from './category.component';
import { ItemComponent } from './item.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryFormComponent,
    ItemFormComponent,
    CategoryListComponent,
    ItemListComponent,
    CategoryComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
