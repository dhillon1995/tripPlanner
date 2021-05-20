
import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  time: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', time:'Breakfast'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', time:'Morning'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', time:'Lunch'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', time:'Afternoon'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B', time:'Dinner'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', time:'Where to stay'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', time:'Morning'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', time:'Morning'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', time:'Morning'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', time:'Morning'},
];

@Component({
  selector: 'app-plannerpage',
  templateUrl: './plannerpage.component.html',
  styleUrls: ['./plannerpage.component.css']
})
export class PlannerpageComponent implements OnInit {

  displayedColumns: string[] = ['time', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(PlannerpageComponentDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {
  }

}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
})
export class PlannerpageComponentDialog {}
