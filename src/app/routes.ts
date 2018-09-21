import { Routes } from "@angular/router";
import { SearchComponent } from "./search/search.component";
import { CompanyComponent } from "./company/company.component";
import { CategoryComponent } from "./category/category.component";

export const appRoutes:Routes = [
  { path: '', component: SearchComponent},
  {path: 'company', component: CompanyComponent},
  {path: 'category', component: CategoryComponent}
]