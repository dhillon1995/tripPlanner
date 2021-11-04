import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Router } from '@angular/router';

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

  toppings = new FormControl();
  toppingList: string[] = ['Dog Friendly', 'Disability Access', 'Transport Links', 'Free WiFi', 'Parking Available'];


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onViewDetails(): any {
    this.router.navigateByUrl('/venuepage');
  }

}
