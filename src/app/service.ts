import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class Service {
  constructor(private http:HttpClient) {

  }
  getCompany(id) {
    if (id == 1) {
    return {
      id: 123,
      name: "test Name",
      info: "Some info",
      rate: 4.5
    }
  }
  }
  getReviews(id){

  }
  getCompanies(category) {

  }
  getCategory(id) {
    
  }
}