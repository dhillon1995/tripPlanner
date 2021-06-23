import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { HttpClient } from "@angular/common/http";
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

  postData = {
    command: 'get_venue',
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
          var venueData = {"name": venue[1][1], "locale": "hard code", "availiblity": "hardcoded", "type": "Hardcoded", "pricing": "hard coded", "imgurl": "assets/img/Prison 1.jpg", "desc": "hardcoded"};

          this.venues2.push(venueData);
  
      });

      this.venues = (this.venues2);



      console.log(this.venues2)
      //this.venues2 = data
      


    });
   }

 
   //venues: any = (data as any).default;

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
