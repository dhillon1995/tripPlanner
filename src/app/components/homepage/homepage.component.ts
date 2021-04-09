import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  images = `https://images.pexels.com/photos/6135766/pexels-photo-6135766.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`;
  title = 'Cotswolds Destinations';

  ngOnInit(): void {
  }
}