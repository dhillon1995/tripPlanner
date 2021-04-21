import { Component, OnInit, Input } from '@angular/core';
import * as data from "./cattestfile.json";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  @Input() venueData!: object;
  constructor() { }
  JSONData: any;

  ngOnInit(): void {
    console.log("Card Component Start");
    console.log(this.venueData);
    this.JSONData = JSON.parse(JSON.stringify(this.venueData));
    console.log(this.JSONData);
    console.log(this.JSONData.name);
    console.log("Card Component End");
  }
}
