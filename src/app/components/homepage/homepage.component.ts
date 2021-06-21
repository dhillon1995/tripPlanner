import { Component, OnInit } from '@angular/core';
import * as data from "./testfile.json";
import * as catdata from "../categories/cattestfile.json";
import {VenueserviceService} from "../../services/venueservice.service";
import { HttpClient } from "@angular/common/http";
import { ConstantPool } from '@angular/compiler';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private venueService: VenueserviceService) {}

  fetchedData:any;
   getData =  async () => {
    this.venueService.httpGetFeatures()
      .subscribe( data => { this.fetchedData = data });
      console.log("fetched data here")
      console.log(this.fetchedData)
  }

  //constructor(private venueService: VenueserviceService) { }
/**
  url = "http://cotswoldsdestinations.co.uk:8443"

  constructor(private http: HttpClient) { 
    this.http.get(this.url).toPromise().then(data => {
      console.log(data);
    });
  }
 */

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
    let categories = this.venueService.httpGetFeatures2()
    console.log("get categories 2")
    console.log(categories)

  }
}


/**
const getData =  async () => {
  const data  = await this.venueService.httpGetFeatures()
  console.log(data)
}
 */

/**
 * 
 fetchedData:any;
const getData =  async () => {
  this.venueService.httpGetFeatures()
    .subscribe( data => { this.fetchedData = data });
}

 */