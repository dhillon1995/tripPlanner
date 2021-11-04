import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mini-cards',
  templateUrl: './mini-cards.component.html',
  styleUrls: ['./mini-cards.component.css']
})
export class MiniCardsComponent implements OnInit {

  @Input() venueData!: object;

  JSONData: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log("Mini Card Component Start");
    console.log(this.venueData);
    this.JSONData = JSON.parse(JSON.stringify(this.venueData));
    console.log(this.JSONData);
    console.log(this.JSONData.name);
    console.log(this.JSONData.imgurl);
    console.log("Mini Card Component End");
  }

  onViewDetails(): any {

    // ToDo - Go to Correct Venue Page

    console.log(this.JSONData);

    if (this.JSONData.name === "Lake Pochard Waterside Cafe")
    {
      console.log("HERE");
      this.router.navigateByUrl('/venuepage');
    }
    else if (this.JSONData.name === "Kings Head Hotel")
    {
      console.log("Kings Head Hotel");
      this.router.navigateByUrl('/venuepagedb');
    }
    else if (this.JSONData.name === "Cotswold Wildlife Park")
    {
      console.log("Cotswold Wildlife Park");
      this.router.navigateByUrl('/park');
    }
    else if (this.JSONData.name === "The Old Prison")
    {
      console.log("The Old Prison");
      this.router.navigateByUrl('/prison');
    }
    else if (this.JSONData.name === "Cotswold Distillary")
    {
      console.log("Cotswold Distillary");
      this.router.navigateByUrl('/distillary');
    }
    else if (this.JSONData.name === "Jacks Cafe")
    {
      console.log("Jacks Cafe");
      this.router.navigateByUrl('/jacks');
    }
    else if (this.JSONData.name === "The Gateway Cafe")
    {
      console.log("The Gateway Cafe");
      this.router.navigateByUrl('/gateway');
    }
    else if (this.JSONData.name === "Sally Pusseys")
    {
      console.log("Sally Pusseys");
      this.router.navigateByUrl('/sally');
    }
    else if (this.JSONData.name === "The Priory Inn")
    {
      console.log("The Priory Inn");
      this.router.navigateByUrl('/priory');
    }
    else if (this.JSONData.name === "Somewhere Else")
    {
      console.log("Somewhere Else");
      this.router.navigateByUrl('/somewhere');
    }
    else if (this.JSONData.name === "Lower Mill Spa")
    {
      console.log("Lower Mill Spa");
      this.router.navigateByUrl('/lowerMill');
    }
    else if (this.JSONData.name === "Cotswold Way")
    {
      console.log("Cotswold Way");
      this.router.navigateByUrl('/cotsway');
    }
    else if (this.JSONData.name === "Gloucestershire Warwickshire Steam Railway")
    {
      console.log("Gloucestershire Warwickshire Steam Railway");
      this.router.navigateByUrl('/railway');
    }
    else if (this.JSONData.name === "Gloucester Cathedral")
    {
      console.log("Gloucester Cathedral");
      this.router.navigateByUrl('/cathedral');
    }
    else if (this.JSONData.name === "Corinium Museum")
    {
      console.log("Corinium Museum");
      this.router.navigateByUrl('/coroniumMuseum');
    }
    else if (this.JSONData.name === "Birdland")
    {
      console.log("Birdland");
      this.router.navigateByUrl('/birdland');
    }
    else if (this.JSONData.name === "Westonbirt Arboretum")
    {
      console.log("Westonbirt Arboretum");
      this.router.navigateByUrl('/arboretum');
    }
    else if (this.JSONData.name === "Stow Visitor Information Centre")
    {
      console.log("Stow Visitor Information Centre");
      this.router.navigateByUrl('/stowVisitor');
    }
    else if (this.JSONData.name === "Broadway Tourist Information Centre")
    {
      console.log("ThBroadway Tourist Information Centre");
      this.router.navigateByUrl('/broadway');
    }
    else if (this.JSONData.name === "Gloucester Tourist Information Centre")
    {
      console.log("Gloucester Tourist Information Centre");
      this.router.navigateByUrl('/gloucesterTourist');
    }
    else if (this.JSONData.name === "Tewkesbury Heritage and Visitor Centre")
    {
      console.log("Tewkesbury Heritage and Visitor Centre");
      this.router.navigateByUrl('/tewkesburyHeritage');
    }
    else if (this.JSONData.name === "Cotswold Canals Trust Visitor Centre")
    {
      console.log("Cotswold Canals Trust Visitor Centre");
      this.router.navigateByUrl('/canalsTrust');
    }
    else if (this.JSONData.name === "Corinium Hotel & Restaurant")
    {
      console.log("Corinium Hotel & Restaurant");
      this.router.navigateByUrl('/coroniumHotel');
    }
    else if (this.JSONData.name === "Cotswold Hare")
    {
      console.log("Cotswold Hare");
      this.router.navigateByUrl('/cotswoldHare');
    }
    else if (this.JSONData.name === "The Ivy House")
    {
      console.log("The Ivy House");
      this.router.navigateByUrl('/ivyHouse');
    }
    else if (this.JSONData.name === "Stratton House Hotel")
    {
      console.log("Stratton House Hotel");
      this.router.navigateByUrl('/strattonHouse');
    }
    else if (this.JSONData.name === "Cineworld Cheltenham")
    {
      console.log("Cineworld Cheltenham");
      this.router.navigateByUrl('/cineworld');
    }
    else if (this.JSONData.name === "Cheltenham Music Festival")
    {
      console.log("Cheltenham Music Festival");
      this.router.navigateByUrl('/musicFestival');
    }
    else if (this.JSONData.name === "Cotswold Outdoor")
    {
      console.log("Cotswold Outdoor");
      this.router.navigateByUrl('/cotswoldOutdoor');
    }



  }

}
