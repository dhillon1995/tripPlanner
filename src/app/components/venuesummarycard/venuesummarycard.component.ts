import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-venuesummarycard',
  templateUrl: './venuesummarycard.component.html',
  styleUrls: ['./venuesummarycard.component.css']
})

@Injectable()
export class VenuesummarycardComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.httpGetFeatures();
  }

  httpGetFeatures() {

    this.http.post("http://127.0.0.1:8000",
 {
         "command": "get_feature",
         "classes":"F,G"
 })
 .subscribe(
         (val) => {
                         this.parseFeatures(val);
         },
         response => {
         console.log("POST call in error", response);
         },
                 () => {
 });
 }

 parseFeatures(val: any) {
   console.log(val);
 }

}
