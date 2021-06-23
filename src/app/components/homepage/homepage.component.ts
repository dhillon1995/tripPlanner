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
  

/**
  fetchedData:any;
   getData =  async () => {
    this.venueService.httpGetFeatures()
      .subscribe( data => { this.fetchedData = data });
      console.log("fetched data here")
      console.log(this.fetchedData)
      console.log("fetched data end")
  }
 */
  //constructor(private venueService: VenueserviceService) { }

  

 // constructor(private http: HttpClient) { 
 //   this.http.get(this.url).toPromise().then(data => {
 //     console.log(data);
 //   });
 // }

  postData = {
    command: 'get_feature',
    classes: 'F,G',
  }
  
/**
  url = "http://cotswoldsdestinations.co.uk:8443"

  json;

  constructor(private http: HttpClient) {
    this.http.post<any>(this.url, this.postData).toPromise().then((data) => {
      console.log("post request in progress")
      console.log("printing data array")
      console.log(data)
      this.json = data.json
      console.log("printing json variable")
      console.log(this.json)
      console.log("post request finished")
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
    //let categories = this.venueService.httpGetFeatures2()
    //console.log("get categories 2")
    //console.log(categories)
    //this.getData()

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