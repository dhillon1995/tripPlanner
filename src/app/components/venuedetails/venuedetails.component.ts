import { Component, OnInit } from '@angular/core';
import * as settings from "./testdata.json";

@Component({
  selector: 'app-venuedetails',
  templateUrl: './venuedetails.component.html',
  styleUrls: ['./venuedetails.component.css']
})
export class VenuedetailsComponent implements OnInit {

  name = settings[0].name;

  constructor() { }

  ngOnInit(): void {
    console.log("test")
  }

}
