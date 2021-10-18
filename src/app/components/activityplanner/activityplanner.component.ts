import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-activityplanner',
  templateUrl: './activityplanner.component.html',
  styleUrls: ['./activityplanner.component.css']
})
export class ActivityplannerComponent implements OnInit {

  adults = new FormControl();

  adultList: string[] = ['1', '2', '3', '4', '5', '6'];

  children = new FormControl();

  childrenList: string[] = ['1', '2', '3', '4', '5', '6'];


  constructor() { }

  ngOnInit(): void {
  }

}
