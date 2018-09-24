import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CompanyComponent } from './company/company.component';
import { CategoryComponent } from './category/category.component';
import { SearchComponent } from './search/search.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { StarsComponent } from './stars/stars.component'
import { HttpClientModule } from '@angular/common/http';
import { Service } from './service';
import { FilterPipe } from './pipes/filter.pipe';
@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    CategoryComponent,
    SearchComponent,
    StarsComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
