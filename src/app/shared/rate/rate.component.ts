import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-rate',
  templateUrl: './rate.component.html'
})
export class RateComponent implements OnInit {

  constructor() { }

  rates : number[] = [1,2,3,4,5]
  rate : number = 0
  previusRate : number = 0

  ngOnInit() {
  }

  setRate(r : number){
    this.rate = r
    this.previusRate = undefined
  }

  setTemporaryRate(r : number){
    if(this.previusRate === undefined){
      this.previusRate = this.rate
    }
    this.rate = r
  }

  clearTemporaryRate(){
    if(this.previusRate !== undefined){
      this.rate = this.previusRate
      this.previusRate = undefined
    }
  }

}
