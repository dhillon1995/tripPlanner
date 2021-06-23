import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {

  @Input() venueData!: object;
  
  constructor(private router: Router) { }
  
  JSONData: any;

  ngOnInit(): void {
    console.log("Card Component Start");
    console.log(this.venueData);
    this.JSONData = JSON.parse(JSON.stringify(this.venueData));
    console.log(this.JSONData);
    console.log(this.JSONData.name);
    console.log(this.JSONData.imgurl);
    console.log("Card Component End");
  }
  
  onViewDetails(): any {

  // ToDo - Go to Correct Venue Page
	console.log(this.JSONData);
   if (this.JSONData.name === "Lake Pochard Waterside Cafe"){
	console.log("HERE");
	this.router.navigateByUrl('/venuepage');
	}
  }
}
