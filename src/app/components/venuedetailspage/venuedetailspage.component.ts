import { Component, OnInit } from '@angular/core';
import * as data from "../homepage/testfile.json";

@Component({
  selector: 'app-venuedetailspage',
  templateUrl: './venuedetailspage.component.html',
  styleUrls: ['./venuedetailspage.component.css']
})
export class VenuedetailspageComponent implements OnInit {

  venues: any = (data as any).default;

  constructor() { }

  ngOnInit(): void {
  }

}
