import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

interface AdultOption {
  value: string;
  viewValue: string;
}

interface ChildOption {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-activity-planner3',
  templateUrl: './activity-planner3.component.html',
  styleUrls: ['./activity-planner3.component.css']
})
export class ActivityPlanner3Component implements OnInit {

  step = 0;

  campaignOne: FormGroup;

  AdultOptions: AdultOption[] = [
    {value: '1', viewValue: '1 Adult'},
    {value: '2', viewValue: '2 Adults'},
    {value: '3', viewValue: '3 Adults'},
    {value: '4', viewValue: '4 Adults'},
    {value: '5', viewValue: '5 Adults'},
    {value: '6', viewValue: '6 Adults'},
    {value: '7', viewValue: '7 Adults'},
    {value: '8', viewValue: '8 Adults'},
    {value: '9', viewValue: '9 Adults'},
    {value: '10', viewValue: '10 Adults'},
  ];

  ChildOptions: ChildOption[] = [
    {value: '1', viewValue: '1 Child'},
    {value: '2', viewValue: '2 Children'},
    {value: '3', viewValue: '3 Children'},
    {value: '4', viewValue: '4 Children'},
    {value: '5', viewValue: '5 Children'},
    {value: '6', viewValue: '6 Children'},
    {value: '7', viewValue: '7 Children'},
    {value: '8', viewValue: '8 Children'},
    {value: '9', viewValue: '9 Children'},
    {value: '10', viewValue: '10 Children'},
  ];

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }



  constructor() { }

  ngOnInit(): void {
  }

}
