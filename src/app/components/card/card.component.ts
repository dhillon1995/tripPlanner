import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})



export class CardComponent implements OnInit {


  @Input() venueData!: object;
  constructor() { }
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

}
