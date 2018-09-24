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
  companyList = [];
  data = [];
  category = {};
  rating = [];
  constructor(private routeAct: ActivatedRoute, private service:Service) { 
    this.routeAct.queryParams.subscribe(params => {
      this.categoryId = params.id;
    service.getCategory().subscribe(data => {
      data['categories'].forEach(elem => {
        if(elem.id == params.id) {
          this.category = elem;
        }
      })
      data['companies'].forEach(elem => {
        if(elem.category == params.id) {
          this.companyList.push(elem);
        }
      })
      this.companiesGetRate();
    });
    });
  }
  ngOnInit() {
  }
  companiesGetRate() {
    this.service.getCategory().subscribe(data => {
      this.companyList.forEach(elem => {

        this.getCompanyReviews(elem.id)

        
      })
    })
  }
  getCompanyReviews(id) {
    let reviewList = [];
    let revNum = 0;
    this.service.getCategory().subscribe(data => {
      data["review"].forEach(elem => {
        if (elem.company == id) {
          reviewList.push(elem);
          revNum += (5-elem.rating)*elem.relevance
        }
      })
      let a = (5 - (revNum/reviewList.length));
      this.rating.push(5 - (revNum/reviewList.length))
    })
  }
  companiesSort() {
    let sortedList = [];

  }
}
