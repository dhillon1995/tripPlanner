import { Component, OnInit, Input } from '@angular/core';
import * as data from "../venuedetails/testdata.json";

@Component({
  selector: 'app-foodcards',
  templateUrl: './foodcards.component.html',
  styleUrls: ['./foodcards.component.css']
})
export class FoodcardsComponent implements OnInit {

  @Input() venueData!: object;
  constructor() { }
  JSONData: any;

  ngOnInit(): void {
    console.log(this.JSONData);
  }

}
