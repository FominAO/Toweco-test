import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Service } from '../service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  company:{
    id:number,
    name:string,
    info:string,
    rate:number
  }
  companyRate:number;
  constructor(private routeAct: ActivatedRoute, private service:Service) { 
    this.routeAct.queryParams.subscribe(params => {
     this.company = service.getCompany(params.id);
    });
  }

  ngOnInit() {
  }

}
