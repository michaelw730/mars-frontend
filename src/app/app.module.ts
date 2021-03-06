//modules (imports)
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
//components (declarations)
import { AppComponent } from './app.component';
import { CategoryFormComponent } from './category-form.component';
import { ItemFormComponent } from './item-form.component';
import { CategoryListComponent } from './category-list.component';
import { ItemListComponent } from './item-list.component';
import { CategoryComponent } from './category.component';
import { ItemComponent } from './item.component';
import { StatsComponent } from './stats.component';
import { DatabaseComponent } from './database.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryFormComponent,
    ItemFormComponent,
    CategoryListComponent,
    ItemListComponent,
    CategoryComponent,
    ItemComponent,
    StatsComponent,
    DatabaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
