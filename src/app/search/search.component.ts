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
  companies = [];
  categories = [];
  searchArray = [];
  searchResult = [];
  constructor(private routeAct: ActivatedRoute, private service:Service) { 
    service.getCategory().subscribe( data => {
      this.companies = data['companies']
      this.categories = data['categories']
      this.makeSearchArray()
    })
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

      this.companyChoosen = true;
      this.service.getCategory().subscribe( data => {
        data['companies'].forEach(elem => {
          if (elem.id == obj['id']) {
            this.company = elem;
          }
        })
        data['categories'].forEach(elem => {
          if (elem.id == this.company.category) {
            this.company.category = elem.name;
          }
        })
      })
    }
  }
  makeSearchArray() {
    this.companies.forEach(elem => {
      this.searchArray.push({type: 'company', name: elem.name, id: elem.id})
    })
    this.categories.forEach(elem => {
      this.searchArray.push({type: 'category', name: elem.name, id: elem.id})
    })

  }
  clear() {
    this.companyChoosen = false;
  }
  search(str){
    this.searchResult = this.companies;
  }
}
