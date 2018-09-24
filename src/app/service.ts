import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Company {
      id: number; 
      name: string; 
      category: string;
}

@Injectable()
export class Service {
  constructor(private http:HttpClient) {

  }

  getCompany(id):Company {

    this.http.get("assets/json-powered/db.json").subscribe( data => {
      data['companies'].forEach(element => {
        if (element.id == id) {
          
        }
    })
    
  })
  return 
  }
  getReviews(id){
    let reviews = [];
    this.http.get("assets/json-powered/db.json").subscribe( data => {
      data['companies'].forEach(element => {
        if (element.company == id) {
          reviews.push(element)
        }
    })
    return reviews;
    })
  }
  getCompanies(category) {
    let companies = [];
    this.http.get("assets/json-powered/db.json").subscribe( data => {
      data['companies'].forEach(element => {
        if (element.category == category) {
          companies.push(element)
        }
      });
      return companies;
    })
  }
  getCategory() {
    // let categories:object[] = [];
    return this.http.get("assets/json-powered/db.json")
  }
}