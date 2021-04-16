import { Component, OnInit } from '@angular/core';
import * as data from "./cattestfile.json";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor() { }
  venues: any = (data as any).default;

  ngOnInit(): void {
    console.log("Homepage Start");
    console.log(this.venues);
    console.log(data);
    console.log(this.venues.name);
    for(var i=0; i < this.venues.length; i++){
	console.log(this.venues[i]);
    }
    console.log("Homepage End");
  }

}
