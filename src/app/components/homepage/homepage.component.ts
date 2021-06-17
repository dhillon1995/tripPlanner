import { Component, OnInit } from '@angular/core';
import * as data from "./testfile.json";
import * as catdata from "../categories/cattestfile.json";
import {VenueserviceService} from "../../services/venueservice.service"


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private venueService: VenueserviceService) { }

  panelOpenState = false;
  title = 'Cotswolds Destinations';

  venues: any = (data as any).default;

  categories: any = (catdata as any).default;

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'm';
    }

    return value;
  }

  value = 'Clear me!';

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
    let categories = this.venueService.httpGetFeatures()

    console.log(categories)

  }
}



const getData =  async () => {
  const data  = await this.venueService.httpGetFeatures()
  console.log(data)
}