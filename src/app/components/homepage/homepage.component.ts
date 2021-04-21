import { Component, OnInit } from '@angular/core';
import * as data from "./testfile.json";
import * as catdata from "../categories/cattestfile.json";


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  title = 'Cotswolds Destinations';

  venues: any = (data as any).default;

  categories: any = (catdata as any).default;


  ngOnInit(): void {
    console.log("Homepage Start");
    console.log(this.categories);
    console.log(this.venues);
    console.log(data);
    console.log(this.venues.name);
    for(var i=0; i < this.venues.length; i++){
	console.log(this.venues[i]);
    }
    console.log("Homepage End");
  }
}
