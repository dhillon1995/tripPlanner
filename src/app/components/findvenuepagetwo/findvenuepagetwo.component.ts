import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import * as data from "../homepage/testfile.json";

@Component({
  selector: 'app-findvenuepagetwo',
  templateUrl: './findvenuepagetwo.component.html',
  styleUrls: ['./findvenuepagetwo.component.css']
})
export class FindvenuepagetwoComponent implements OnInit {

  showFiller = true;
  value = 'Clear me';
  panelOpenState = false;

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'm';
    }

    return value;
  }

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });


  constructor() { }

  venues: any = (data as any).default;

  ngOnInit(): void {
    console.log("FindVenue Start");
    console.log(this.venues);
    console.log(data);
    console.log(this.venues.name);
    for(var i=0; i < this.venues.length; i++){
	console.log(this.venues[i]);
    }
    console.log("Homepage End");
  }

}
