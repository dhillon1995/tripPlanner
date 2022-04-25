import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { SearchServiceService } from 'src/app/search-service.service';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';


@Component({
  selector: 'app-portal-local-search',
  templateUrl: './portal-local-search.component.html',
  styleUrls: ['./portal-local-search.component.css']
})
export class PortalLocalSearchComponent implements OnInit {

  value = 'Clear me';

  options = [] as  any;

  filteredOptions:any;
  
  responseTracker:any;


  formGroup! : FormGroup;

  constructor(private service : SearchServiceService, private fb : FormBuilder, private http: HttpClient, private router: Router) { }

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
      this.responseTracker = response;
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

  onViewDetails(): any {
    console.log("Search click test")
    if (this.responseTracker === "Lake Pochard Waterside Cafe")
    {
      console.log("HERE");
      this.router.navigateByUrl('/venuepage');
    }
    else if (this.responseTracker === "Kings Head Hotel")
    {
      console.log("Kings Head Hotel");
      this.router.navigateByUrl('/venuepagedb');
    }
    else if (this.responseTracker === "Cotswold Wildlife Park")
    {
      console.log("Cotswold Wildlife Park");
      this.router.navigateByUrl('/park');
    }
    else if (this.responseTracker === "The Old Prison")
    {
      console.log("The Old Prison");
      this.router.navigateByUrl('/prison');
    }
    else if (this.responseTracker === "Cotswold Distillary")
    {
      console.log("Cotswold Distillary");
      this.router.navigateByUrl('/distillary');
    }
    else if (this.responseTracker === "Jacks Cafe")
    {
      console.log("Jacks Cafe");
      this.router.navigateByUrl('/jacks');
    }
    else if (this.responseTracker === "The Gateway Cafe")
    {
      console.log("The Gateway Cafe");
      this.router.navigateByUrl('/gateway');
    }
    else if (this.responseTracker === "Sally Pusseys")
    {
      console.log("Sally Pusseys");
      this.router.navigateByUrl('/sally');
    }
    else if (this.responseTracker === "The Priory Inn")
    {
      console.log("The Priory Inn");
      this.router.navigateByUrl('/priory');
    }
    else if (this.responseTracker === "Somewhere Else")
    {
      console.log("Somewhere Else");
      this.router.navigateByUrl('/somewhere');
    }
    else if (this.responseTracker === "Lower Mill Spa")
    {
      console.log("Lower Mill Spa");
      this.router.navigateByUrl('/lowerMill');
    }
    else if (this.responseTracker === "Cotswold Way")
    {
      console.log("Cotswold Way");
      this.router.navigateByUrl('/cotsway');
    }
    else if (this.responseTracker === "Gloucestershire Warwickshire Steam Railway")
    {
      console.log("Gloucestershire Warwickshire Steam Railway");
      this.router.navigateByUrl('/railway');
    }
    else if (this.responseTracker === "Gloucester Cathedral")
    {
      console.log("Gloucester Cathedral");
      this.router.navigateByUrl('/cathedral');
    }
    else if (this.responseTracker === "Corinium Museum")
    {
      console.log("Corinium Museum");
      this.router.navigateByUrl('/coroniumMuseum');
    }
    else if (this.responseTracker === "Birdland")
    {
      console.log("Birdland");
      this.router.navigateByUrl('/birdland');
    }
    else if (this.responseTracker === "Westonbirt Arboretum")
    {
      console.log("Westonbirt Arboretum");
      this.router.navigateByUrl('/arboretum');
    }
    else if (this.responseTracker === "Stow Visitor Information Centre")
    {
      console.log("Stow Visitor Information Centre");
      this.router.navigateByUrl('/stowVisitor');
    }
    else if (this.responseTracker === "Broadway Tourist Information Centre")
    {
      console.log("ThBroadway Tourist Information Centre");
      this.router.navigateByUrl('/broadway');
    }
    else if (this.responseTracker === "Gloucester Tourist Information Centre")
    {
      console.log("Gloucester Tourist Information Centre");
      this.router.navigateByUrl('/gloucesterTourist');
    }
    else if (this.responseTracker === "Tewkesbury Heritage and Visitor Centre")
    {
      console.log("Tewkesbury Heritage and Visitor Centre");
      this.router.navigateByUrl('/tewkesburyHeritage');
    }
    else if (this.responseTracker === "Cotswold Canals Trust Visitor Centre")
    {
      console.log("Cotswold Canals Trust Visitor Centre");
      this.router.navigateByUrl('/canalsTrust');
    }
    else if (this.responseTracker === "Corinium Hotel & Restaurant")
    {
      console.log("Corinium Hotel & Restaurant");
      this.router.navigateByUrl('/coroniumHotel');
    }
    else if (this.responseTracker === "Cotswold Hare")
    {
      console.log("Cotswold Hare");
      this.router.navigateByUrl('/cotswoldHare');
    }
    else if (this.responseTracker === "The Ivy House")
    {
      console.log("The Ivy House");
      this.router.navigateByUrl('/ivyHouse');
    }
    else if (this.responseTracker === "Stratton House Hotel")
    {
      console.log("Stratton House Hotel");
      this.router.navigateByUrl('/strattonHouse');
    }
    else if (this.responseTracker === "Cineworld Cheltenham")
    {
      console.log("Cineworld Cheltenham");
      this.router.navigateByUrl('/cineworld');
    }
    else if (this.responseTracker === "Cheltenham Music Festival")
    {
      console.log("Cheltenham Music Festival");
      this.router.navigateByUrl('/musicFestival');
    }
    else if (this.responseTracker === "Cotswold Outdoor")
    {
      console.log("Cotswold Outdoor");
      this.router.navigateByUrl('/cotswoldOutdoor');
    }
  }

  onSearch(): any {
    console.log("search test", this.responseTracker)
    if (this.responseTracker === "Lake Pochard Waterside Cafe")
    {
      console.log("HERE");
      this.router.navigateByUrl('/venuepage');
    }
    else if (this.responseTracker === "Kings Head Hotel")
    {
      console.log("Kings Head Hotel");
      this.router.navigateByUrl('/venuepagedb');
    }
    else if (this.responseTracker === "Cotswold Wildlife Park")
    {
      console.log("Cotswold Wildlife Park");
      this.router.navigateByUrl('/park');
    }
    else if (this.responseTracker === "The Old Prison")
    {
      console.log("The Old Prison");
      this.router.navigateByUrl('/prison');
    }
    else if (this.responseTracker === "Cotswold Distillary")
    {
      console.log("Cotswold Distillary");
      this.router.navigateByUrl('/distillary');
    }
    else if (this.responseTracker === "Jacks Cafe")
    {
      console.log("Jacks Cafe");
      this.router.navigateByUrl('/jacks');
    }
    else if (this.responseTracker === "The Gateway Cafe")
    {
      console.log("The Gateway Cafe");
      this.router.navigateByUrl('/gateway');
    }
    else if (this.responseTracker === "Sally Pusseys")
    {
      console.log("Sally Pusseys");
      this.router.navigateByUrl('/sally');
    }
    else if (this.responseTracker === "The Priory Inn")
    {
      console.log("The Priory Inn");
      this.router.navigateByUrl('/priory');
    }
    else if (this.responseTracker === "Somewhere Else")
    {
      console.log("Somewhere Else");
      this.router.navigateByUrl('/somewhere');
    }
    else if (this.responseTracker === "Lower Mill Spa")
    {
      console.log("Lower Mill Spa");
      this.router.navigateByUrl('/lowerMill');
    }
    else if (this.responseTracker === "Cotswold Way")
    {
      console.log("Cotswold Way");
      this.router.navigateByUrl('/cotsway');
    }
    else if (this.responseTracker === "Gloucestershire Warwickshire Steam Railway")
    {
      console.log("Gloucestershire Warwickshire Steam Railway");
      this.router.navigateByUrl('/railway');
    }
    else if (this.responseTracker === "Gloucester Cathedral")
    {
      console.log("Gloucester Cathedral");
      this.router.navigateByUrl('/cathedral');
    }
    else if (this.responseTracker === "Corinium Museum")
    {
      console.log("Corinium Museum");
      this.router.navigateByUrl('/coroniumMuseum');
    }
    else if (this.responseTracker === "Birdland")
    {
      console.log("Birdland");
      this.router.navigateByUrl('/birdland');
    }
    else if (this.responseTracker === "Westonbirt Arboretum")
    {
      console.log("Westonbirt Arboretum");
      this.router.navigateByUrl('/arboretum');
    }
    else if (this.responseTracker === "Stow Visitor Information Centre")
    {
      console.log("Stow Visitor Information Centre");
      this.router.navigateByUrl('/stowVisitor');
    }
    else if (this.responseTracker === "Broadway Tourist Information Centre")
    {
      console.log("ThBroadway Tourist Information Centre");
      this.router.navigateByUrl('/broadway');
    }
    else if (this.responseTracker === "Gloucester Tourist Information Centre")
    {
      console.log("Gloucester Tourist Information Centre");
      this.router.navigateByUrl('/gloucesterTourist');
    }
    else if (this.responseTracker === "Tewkesbury Heritage and Visitor Centre")
    {
      console.log("Tewkesbury Heritage and Visitor Centre");
      this.router.navigateByUrl('/tewkesburyHeritage');
    }
    else if (this.responseTracker === "Cotswold Canals Trust Visitor Centre")
    {
      console.log("Cotswold Canals Trust Visitor Centre");
      this.router.navigateByUrl('/canalsTrust');
    }
    else if (this.responseTracker === "Corinium Hotel & Restaurant")
    {
      console.log("Corinium Hotel & Restaurant");
      this.router.navigateByUrl('/coroniumHotel');
    }
    else if (this.responseTracker === "Cotswold Hare")
    {
      console.log("Cotswold Hare");
      this.router.navigateByUrl('/cotswoldHare');
    }
    else if (this.responseTracker === "The Ivy House")
    {
      console.log("The Ivy House");
      this.router.navigateByUrl('/ivyHouse');
    }
    else if (this.responseTracker === "Stratton House Hotel")
    {
      console.log("Stratton House Hotel");
      this.router.navigateByUrl('/strattonHouse');
    }
    else if (this.responseTracker === "Cineworld Cheltenham")
    {
      console.log("Cineworld Cheltenham");
      this.router.navigateByUrl('/cineworld');
    }
    else if (this.responseTracker === "Cheltenham Music Festival")
    {
      console.log("Cheltenham Music Festival");
      this.router.navigateByUrl('/musicFestival');
    }
    else if (this.responseTracker === "Cotswold Outdoor")
    {
      console.log("Cotswold Outdoor");
      this.router.navigateByUrl('/cotswoldOutdoor');
    }
    else {
      console.log("search test routing");
      this.router.navigateByUrl('/searchpage');
    }
  }

}
