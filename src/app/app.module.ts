import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatRadioModule} from '@angular/material/radio';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { HttpClientModule } from '@angular/common/http';
import {MatTabsModule} from '@angular/material/tabs';

import { CardComponent } from './components/card/card.component';
import { InputComponent } from './components/input/input.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AppRoutingModule } from './app-routing.module';
import { VenueComponent } from './components/venue/venue.component';
import { SearchComponent } from './components/search/search.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { VenuedetailsComponent } from './components/venuedetails/venuedetails.component';
import { FindvenuepageComponent } from './components/findvenuepage/findvenuepage.component';
import { VenuedetailspageComponent } from './components/venuedetailspage/venuedetailspage.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VenuesummarycardComponent } from './components/venuesummarycard/venuesummarycard.component';
import { FoodcardsComponent } from './components/foodcards/foodcards.component';


const routes: Routes = [
  {
    path: '',
    children: []
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    InputComponent,
    NavbarComponent,
    HomepageComponent,
    VenueComponent,
    SearchComponent,
    CategoriesComponent,
    VenuedetailsComponent,
    FindvenuepageComponent,
    VenuedetailspageComponent,
    VenuesummarycardComponent,
    FoodcardsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    AppRoutingModule,
    MatSidenavModule,
    MatDatepickerModule,
    MatExpansionModule,
    MatRadioModule,
    MatSlideToggleModule,
    CarouselModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgbModule,
    MatTabsModule,
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }