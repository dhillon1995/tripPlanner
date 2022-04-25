import { Component, ComponentFactory, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { ActivityPlanner3Page2Component } from '../activity-planner3-page2/activity-planner3-page2.component';
import { ActivityPlanner3Component } from '../activity-planner3/activity-planner3.component';

@Component({
  selector: 'app-activityplanner',
  templateUrl: './activityplanner.component.html',
  styleUrls: ['./activityplanner.component.css']
})
export class ActivityplannerComponent implements OnInit {

  selectedTab = new FormControl(0);

  currentPage: any = ActivityPlanner3Component

  adults = new FormControl();

  adultList: string[] = ['1', '2', '3', '4', '5', '6'];

  children = new FormControl();

  childrenList: string[] = ['1', '2', '3', '4', '5', '6'];

  toppings = new FormControl();
  toppingList: string[] = ['Dog Friendly', 'Disability Access', 'Transport Links', 'Free WiFi', 'Parking Available'];

  showPage1: boolean = true;
  showPage2: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onViewDetails(): any {
    this.router.navigateByUrl('/venuepage');
  }

  onNextButton(): any {
    if (this.showPage1 = true) {
      this.showPage1 = false;
      this.showPage2 = true;
    }
  }

  onNextTabButton(): any {
    this.selectedTab.setValue("1")
  }

  onBackTabButton(): any {
    this.selectedTab.setValue("0")
  }

  onCompleteTabButton(): any {
    this.selectedTab.setValue("2")
  }

  onBackButton(): any {
    if (this.showPage2 = true) {
      this.showPage2 = false;
      this.showPage1 = true;
    }
  }

}
