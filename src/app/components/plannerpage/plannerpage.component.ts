import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  time: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Card Here', weight: 1.0079, symbol: 'Card Here', time:'Breakfast'},
  {position: 2, name: 'Card Here', weight: 4.0026, symbol: 'Card Here', time:'Morning'},
  {position: 3, name: 'Card Here', weight: 6.941, symbol: 'Card Here', time:'Lunch'},
  {position: 4, name: 'Card Here', weight: 9.0122, symbol: 'Card Here', time:'Afternoon'},
  {position: 5, name: 'Card Here', weight: 10.811, symbol: 'Card Here', time:'Dinner'},
  {position: 6, name: 'Card Here', weight: 12.0107, symbol: 'Card Here', time:'Where to stay'},
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
