import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-activity-planner3-page2',
  templateUrl: './activity-planner3-page2.component.html',
  styleUrls: ['./activity-planner3-page2.component.css']
})
export class ActivityPlanner3Page2Component implements OnInit {

  showPage1: boolean = true;
  showPage2: boolean = false;

  constructor() { }

  activities = new FormControl();
  activityList: string[] = ['Museums', 'Outdoor', 'Spas & Wellness', 'Watersports', 'Activites Tours', 'Sights & Landmarks', 'Shopping', 'Concerts & Shows', 'Classes', 'Walking', 'Nature & Parks', 'Workshop Nightlife'];


  plans = new FormControl();
  planList: string[] = ['Monday AM', 'Monday PM', 'Tuesday AM', 'Wednesday AM', 'Wednesday PM', 'Thursday AM', 'Thursday PM', 'Friday AM', 'Friday PM', 'Saturday AM', 'Saturday PM', 'Sunday AM', 'Sunday AM'];

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  testAction() {
    console.log("previous test")
  }

  ngOnInit(): void {
  }

}
