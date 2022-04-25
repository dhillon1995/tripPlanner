import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-distance-filter-input',
  templateUrl: './distance-filter-input.component.html',
  styleUrls: ['./distance-filter-input.component.css']
})
export class DistanceFilterInputComponent implements OnInit {

  constructor() {}

  myControl = new FormControl();
  options: string[] = ['Cotswolds','Cirencester', 'Stourton'];
  filteredOptions: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  

}
