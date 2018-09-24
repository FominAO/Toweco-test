import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Service } from '../service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categoryId;
  companyList;
  data = [];
  category = {};
  constructor(private routeAct: ActivatedRoute, private service:Service) { 
    this.routeAct.queryParams.subscribe(params => {
      this.categoryId = params.id;
    service.getCategory().subscribe(cat => {
      this.data = cat['categories']
      this.getCategory(this.data)
    });
    
    this.companyList = service.getCompanies(params.id);
    });
  }
  getCategory(data) {
    data.forEach(element => {
      if (element.id == this.categoryId) {
        this.category = element;
      }
    });
  }
  ngOnInit() {
  }

}
