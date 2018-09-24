import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Service } from '../service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  data;
  company: {
    id: number; 
    name: string; 
    category: string;
  } = {
    id: 0,
    name: 'none',
    category: 'none'
  }
  rate = 0;
  reviewList = []
  companyRate:number;
  constructor(private routeAct: ActivatedRoute, private service: Service) {

    this.routeAct.queryParams.subscribe(params => {
      service.getCategory().subscribe(data => {
        console.log(data)
        data["companies"].forEach(elem => {
          if (elem.id == params.id) {
            this.company = elem;
          }
        });
        data["review"].forEach(elem => {
          if (elem.company == params.id) {
            this.reviewList.push(elem)
          }
        })
        this.rate = this.getRate();
      });
    });
    
  }

  ngOnInit() {
  }
  getRate() {
    let numerator = 0;
    this.reviewList.forEach(rev => {
      numerator += (5 - rev.rating) * rev.relevance
    })
    console.log(numerator)
    return 5 - (numerator/this.reviewList.length)
  }
}
