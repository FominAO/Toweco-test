import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Service } from '../service';

@Component({
  selector: 'app-search',
  host: {class: 'app-search-insert'},
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  
})
export class SearchComponent implements OnInit {
  companyChoosen = false;
  company= {
    id: 2,
    name: "Name",
    category: "Category"
  };
  constructor(private routeAct: ActivatedRoute, private service:Service) { 
    
    routeAct.queryParams.subscribe(params => {
      this.selectObj({type: "company", id: params.id})
      this.company['id'] = params.id
    })
  }

  ngOnInit() {
    
  }
  selectObj(obj:object) {
    this.clear()
    if (obj['type'] == 'company' && obj['id'] != undefined) {
      console.log(obj)
      this.companyChoosen = true;
      this.company = this.service.getCompany(obj['id'])
    }
  }
  clear() {
    this.companyChoosen = false;
  }
}
