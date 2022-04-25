import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-venue-edit-page',
  templateUrl: './venue-edit-page.component.html',
  styleUrls: ['./venue-edit-page.component.css']
})
export class VenueEditPageComponent implements OnInit {

  overview: string = "The Cotswold Wildlife Park & Gardens exhibits over 260 different species of animals. The park is set in 160 acres of landscaped parkland and gardens."
  description: string = "Closer to Wildlife! Stroll around the Park discovering over 260 different animal species in 160 acres of beautiful parkland and stunning gardens. Get eye-to-eye with Giraffe, walk with Lemurs in our Madagascar exhibit and watch Rhinos graze in front of the Gothic listed Manor House, with only a ha-ha in between you. Take a ride on Bella the Train around the Park or let the kids explore the adventure playground. Have lunch in our restaurant or picnic on our spacious lawns. Pet the goats in the Farmyard or watch the Penguins being fed (daily at 11am & 3pm). If your're brave take a peek in our Reptile house with Crocodiles, venomous snakes and lizards or watch the bats flying around in the Bat house or see the creepy crawlies in the Insect House. Stroll around our Walled Garden with Meerkats, Otters, Prairie Dogs, Penguins and Tropical House with free-roaming Sloths, bats and birds. The glorious garden make a beautiful backdrop to the animals."


  constructor() { }

  ngOnInit(): void {
    console.log(this.overview)
  }

}
