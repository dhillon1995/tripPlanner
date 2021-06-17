import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VenueserviceService {

  constructor(private http: HttpClient) { }

  httpGetFeatures() {
    console.log("inFeatures")
    this.http.post("http://cotswoldsdestinations.co.uk:8443",
  {
         "command": "get_feature",
         "classes":"F,G"
  })

  .subscribe(
         (val) => {
        console.log("inSubscribe")
        console.log(val)
          return(val)
          //this.parseFeatures(val)
         },
         response => {
         console.log("POST call in error", response);
         },
                 () => {
  });
  }



  parseFeatures (val: any) {
    console.log("in parse Features")
    console.log(val)
  }



}