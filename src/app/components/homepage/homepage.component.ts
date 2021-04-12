import { Component, OnInit } from '@angular/core';
import * as data from "./testfile.json";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  title = 'Cotswolds Destinations';

  venues = data

  ngOnInit(): void {
    console.log(data)
    console.log(this.venues)
  }
}