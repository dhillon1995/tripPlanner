import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {

  postData = {
    command: 'get_venue',
  }
  
  url = "http://cotswoldsdestinations.co.uk:8443"

  json: any;

  constructor(private http: HttpClient) { 
    this.http.post<JSON>(this.url, this.postData).toPromise().then((data) => {
      this.json = data;
      console.log("feature post attempt made")
      console.log("this is the data", data)

    });
  }


  ngOnInit(): void {
  }

}
