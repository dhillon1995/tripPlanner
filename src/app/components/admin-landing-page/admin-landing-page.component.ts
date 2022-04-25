import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Router } from '@angular/router';

export interface PeriodicElement {
  name: string;
  type: string;
  local: string;
  action: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Cotswold Wildlife Park', type:"Cafe", local: "Burford", action: 'Burford'},
  {name: 'The Old Prison', type:"Cafe", local: "Fosse way", action: 'Fosse way'},
  {name: 'Cotswold Distillary', type:"Cafe", local: "Stourton", action: 'Stourton'},
  {name: 'Jacks Cafe', type:"Cafe", local: "Cirencester", action: 'Be'},
  {name: 'The Gateway Cafe', type:"Cafe", local: "North Cerney", action: 'B'},
  {name: 'Sally Pusseys', type:"Cafe", local: "Wickfield", action: 'C'},
  {name: 'The Priory Inn', type:"Cafe", local: "Tetbury", action: 'N'},
  {name: 'Somewhere Else', type:"Cafe", local: "Cirencester", action: 'O'},
  {name: 'Lower Mill Spa', type:"Cafe", local: "Somerford Keynes", action: 'F'},
  {name: 'Lake Pochard Waterside Cafe', type:"Cafe", local: "South Cerney", action: 'Ne'},
];


@Component({
  selector: 'app-admin-landing-page',
  templateUrl: './admin-landing-page.component.html',
  styleUrls: ['./admin-landing-page.component.css']
})
export class AdminLandingPageComponent implements OnInit {

  toppings = new FormControl();
  features = new FormControl();
  toppingList: string[] = ['Information', 'Hotels & Travel', 'Things to do', 'Health & Wellbeing', 'Food & Drink', 'Cinema & Theatre'];
  featureList: string[] = ['Parking available','Disabled facilities','Dog friendly','Play area available','Breakfast','Lunch','Afternoon Tea','Evening meal','Take away food','British','Italian','Vegetarian','Gluten Free','Vegan','Food & Drink','Things To Do','Information','Hotels & Travel','Retail','Tour','Indoor','Outdoor','Gift Vouchers','Pre-Book','Children Friendly','Free WIFI','£0-£60 Price Bracket','£60-£100 Price Bracket','£100-£150 Price Bracket','£150+ Price Bracket','Free of Charge','Health & Wellbeing','Cinema & Theatre','Exhibition & Shows','Special Offers','Gym','Tennis Court','Swimming Pool','Spa','Beauty Treatments','1-2 Hours','2-3 Hours','3-4 Hours','4+ Hours','Hiking Trail','Difficulty - Easy','Difficulty - Easy - Moderate','Difficulty - Moderate','Difficulty - Moderate - Hard','Difficulty - Hard','Hotel','Bed & Breakfast','Campsite','Lodges','1 Star','2 Star','3 Star','4 Star','5 Star'];

  displayedColumns: string[] = ['name', 'local', 'type', 'action'];
  dataSource = ELEMENT_DATA;
  customer_panelOpenState = true;
  panelOpenState = true;
  step = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onEdit(): any {
    console.log("edit button test")
    this.router.navigateByUrl('/venueEditpage');
  }

}
