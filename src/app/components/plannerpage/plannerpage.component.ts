
import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-plannerpage',
  templateUrl: './plannerpage.component.html',
  styleUrls: ['./plannerpage.component.css']
})
export class PlannerpageComponent implements OnInit {

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
