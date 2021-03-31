import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-findvenuepage',
  templateUrl: './findvenuepage.component.html',
  styleUrls: ['./findvenuepage.component.css']
})
export class FindvenuepageComponent implements OnInit {
  showFiller = false;
  value = 'Clear me';

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'm';
    }

    return value;
  }

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  constructor() { }

  ngOnInit(): void {
  }

}