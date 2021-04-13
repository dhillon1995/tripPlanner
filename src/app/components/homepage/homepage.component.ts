import { Component, OnInit } from '@angular/core';
import * as data from "./testfile.json";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  title = 'Cotswolds Destinations';

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
