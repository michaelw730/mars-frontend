import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryFormComponent } from './category-form.component';
import { ItemFormComponent } from './item-form.component';
import { CategoryListComponent } from './category-list.component';
import { ItemListComponent } from './item-list.component';

const routes: Routes = [
  { path: 'addcategory', component: CategoryFormComponent },
  { path: 'additem', component: ItemFormComponent },
  { path: 'listcategories', component: CategoryListComponent },
  { path: 'listitems', component: ItemListComponent },
  { path: 'updatecategory/:id', component: CategoryFormComponent },
  { path: 'updateitem/:id', component: ItemFormComponent },
  { path: '', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
