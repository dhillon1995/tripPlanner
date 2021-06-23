import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

  postData = {
    command: 'get_venue',
  }
  
  url = "http://cotswoldsdestinations.co.uk:8443"

  json: any;

  @Input() data!: object;
  constructor(private http: HttpClient) { 
    this.http.post<any>(this.url, this.postData).toPromise().then((data) => {
      this.json = data;
      JSON.stringify(this.json)
      console.log("feature post attempt made")
      console.log(data)
      console.log(this.json)
      
    });
  }



  ngOnInit(): void {
    console.log("init log", this.json)
  }

}
