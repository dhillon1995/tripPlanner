import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { SearchServiceService } from 'src/app/search-service.service';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  value = 'Clear me';

  options = [] as  any;

  filteredOptions:any; 


  formGroup! : FormGroup;

  constructor(private service : SearchServiceService, private fb : FormBuilder, private http: HttpClient){}

  ngOnInit(){
    this.initForm();
    this.getNames();
  }

  initForm(){
    this.formGroup = this.fb.group({
      'venue' : ['']
    })
    this.formGroup.get('venue').valueChanges.subscribe(response => {
      console.log('data is ', response);
      this.filterData(response);
    })
  }

  filterData(enteredData:any){
    this.filteredOptions = this.options.filter((item:any) => {
      return item.toLowerCase().indexOf(enteredData.toLowerCase()) > -1
    })
  }

  postData = {
    command: 'get_venueNames',
  }
  
  url = "http://cotswoldsdestinations.co.uk:8443"

  json: any;
  venues2: Object[] = [];

  venues: any; 

  getNames(){
    this.http.post<JSON>(this.url, this.postData).toPromise().then((data) => {
      this.json = data;
      this.venues2 = [];
      console.log("this is the venue data", data)
      console.log(typeof data)
      let venues: string[] = [];

      Object.entries(data).forEach(venue => {
          console.log(venue[1][0]);
          //let venueData = (name: "", descriptin: "");
          var venueData = venue[1][0];

          console.log("type of venueData", typeof venueData, venueData )

          this.venues2.push(venueData);
  
      });
      
      this.venues = (this.venues2);
      console.log("venues2",this.venues2)
      console.log("this is the venues object",this.venues)
      this.options = this.venues2;
      console.log("options",this.options)
      this.filteredOptions = this.venues2;


      for (const [key, value] of Object.entries(this.venues2)) {
        console.log(`${key}: ${value}`);
      }


    });
  }
}
