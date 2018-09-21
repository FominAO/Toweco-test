import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Service } from '../service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  companyList;
  category;
  constructor(private routeAct: ActivatedRoute, private service:Service) { 
    this.routeAct.queryParams.subscribe(params => {
    this.category = service.getCategory(params.id);
    this.companyList = service.getCompanies(params.id);
    });
  }

  ngOnInit() {
  }

}
