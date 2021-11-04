import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import * as data from "../homepage/testfile.json";

@Component({
  selector: 'app-mini-cards5',
  templateUrl: './mini-cards5.component.html',
  styleUrls: ['./mini-cards5.component.css']
})
export class MiniCards5Component implements OnInit {

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
          var venueData = {"name": venue[1][1], "locale": venue[1][2], "availability": venue[1][4], "type": venue[1][3], "pricing": venue[1][5], "imgurl": venue[1][7], "desc": venue[1][6]};

          this.venues2.push(venueData);
  
      });

      this.venues = (this.venues2);



      console.log(this.venues2)
      //this.venues2 = data
    });
   }

  ngOnInit(): void {
    console.log(this.venues);
    console.log(data);
    for(var i=0; i < this.venues.length; i++){
	console.log(this.venues[i]);
    }
  }

}
