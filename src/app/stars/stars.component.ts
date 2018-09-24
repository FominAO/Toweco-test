import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {
  rateGrade = [ 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5 ]
  
  @Input() rate:number = 0;
  @Input() allowed:boolean = false;
  @Input() review:boolean = false;
  allowChanging = this.allowed;
  constructor() { }

  ngOnInit() {
  }
  changeRate(value) {
    if (this.allowed) {
      this.rate = value;
    }
    
  }
  lockRate(value) {
    if (this.allowChanging) {
      this.rate = value
      this.allowed = false;
    }

  }
}
