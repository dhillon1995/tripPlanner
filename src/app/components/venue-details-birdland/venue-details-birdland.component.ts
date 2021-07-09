import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-venue-details-birdland',
  templateUrl: './venue-details-birdland.component.html',
  styleUrls: ['./venue-details-birdland.component.css']
})
export class VenueDetailsBirdlandComponent implements OnInit {

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

//venue details
  postData = {
    command: 'get_venueDetails',
  }
  
  url = "http://cotswoldsdestinations.co.uk:8443"
  

  json: any;
  
  venues2: Object[] = [];

  venues: any; 
//opening times
  postData2 = {
    command: 'get_openingTimes',
  }
  

  json2: any;
  
  items2: Object[] = [];

  items: any; 

//addresses
  postData3 = {
    command: 'get_addresses',
  }
  

  json3: any;
  
  addresses2: Object[] = [];

  addresses: any; 

  constructor(private http: HttpClient) {
    //Venue details post request and object entries 
    this.http.post<JSON>(this.url, this.postData).toPromise().then((data) => {
      this.json = data;
      this.venues2 = [];
      console.log("feature post attempt made")
      console.log("this is the data:-", data)
      console.log("the type of data is:-", typeof data)

      Object.entries(data).forEach(venue => {
          console.log("Object enrty one name:-", venue[1][0]);
          //let venueData = (name: "", descriptin: "");
          var venueData = {
            "name": venue[1][1], 
            "locale": venue[1][2], 
            "type": venue[1][3], 
            "availability": venue[1][4], 
            "pricing": venue[1][5], 
            "imgurl": "assets/img/Images/KIngs Head Hotel/download (1).jpg", 
            "desc": venue[1][6], 
            "overview": venue[1][8]
          };

          this.venues2.push(venueData);
  
      });

      
    

      this.venues = (this.venues2);

      console.log("object array venues :-", this.venues)
      console.log("json log:-", this.json)
      console.log("venues object name:-", this.venues[0].name)
      //this.venues2 = data
    });

    //Opening times post request and object entries 
    this.http.post<JSON>(this.url, this.postData2).toPromise().then((data2) => {
      this.json2 = data2;
      this.items2 = [];
      console.log("opening times post attempt made","this is the data:-", data2, "the type of data is:-", typeof data2)
      
      Object.entries(data2).forEach(item => {
        //let venueData = (name: "", descriptin: "");
        var itemData = {
          "v_id": item[1][1], 
          "mon_to_fri": item[1][2], 
          "sat": item[1][3], 
          "sun": item[1][4]
        };

        this.items2.push(itemData);

    });

    this.items = (this.items2);

    console.log("object array items :-", this.items)
      console.log("json2 log:-", this.json2)
      console.log("items object mon:-", this.items.mon_to_fri)

    });

    //Address request post and object entries 
    this.http.post<JSON>(this.url, this.postData3).toPromise().then((data3) => {
      this.json3 = data3;
      this.addresses2 = [];
      console.log("Addresses post attempt made")
      console.log("this is the data:-", data3)
      console.log("the type of data is:-", typeof data3)

      Object.entries(data3).forEach(address => {
        //let venueData = (name: "", descriptin: "");
        var addressData = {
          "v_id": address[1][1], 
          "name": address[1][2], 
          "address1": address[1][3], 
          "address2": address[1][4],
          "address3": address[1][5],
          "postcode": address[1][6]
        };

        this.addresses2.push(addressData);

    });

    this.addresses = (this.addresses2);

    console.log("address object-", this.addresses )

  });


  } //constructor end

  ngOnInit(): void {
  }

}
