import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import * as data from "../homepage/testfile.json";

@Component({
  selector: 'app-findvenuepage-exhibitions',
  templateUrl: './findvenuepage-exhibitions.component.html',
  styleUrls: ['./findvenuepage-exhibitions.component.css']
})


export class FindvenuepageExhibitionsComponent implements OnInit {

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

  postData = {
    command: 'get_exhibitionsVenues',
  }
  
  url = "http://cotswoldsdestinations.co.uk:8443"

  json: any;
  venues2: Object[] = [];

  venues: any; 

  constructor(private http: HttpClient) {
    this.http.post<JSON>(this.url, this.postData).toPromise().then((data) => {
      this.json = data;
      this.venues2 = [];
      console.log("feature post attempt made")
      console.log("this is the data", data)
      console.log(typeof data)
      let venues: string[] = [];

      Object.entries(data).forEach(venue => {
          console.log(venue[1][1]);
          //let venueData = (name: "", descriptin: "");
          var venueData = {"name": venue[1][1], "locale": venue[1][2], "availability": venue[1][4], "type": venue[1][3], "pricing": venue[1][5], "imgurl": venue[1][7], "desc": venue[1][6]};

          this.venues2.push(venueData);
  
      });

      this.venues = (this.venues2);



      console.log(this.venues2)
      //this.venues2 = data
    });
  } //constructor end

 
   //venues: any = (data as any).default;

  ngOnInit(): void {
    console.log("FindVenue Start");
    console.log(this.venues);
    console.log(data);
    for(var i=0; i < this.venues.length; i++){
	console.log(this.venues[i]);
    }
    console.log("Homepage End");
  }

}
