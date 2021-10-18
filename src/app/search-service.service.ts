import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, skipWhile, tap} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {

  constructor(private http : HttpClient) { }

  postData = {
    command: 'get_venueNames',
  }
  
  url = "http://cotswoldsdestinations.co.uk:8443"

  getData(){
    return this.http.post<JSON>(this.url, this.postData)
      .pipe(
        map((response:any) => response.map((item: any) => item['name']))
     )
  }
}
