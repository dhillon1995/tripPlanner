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
import {MatNativeDateModule} from '@angular/material/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatRadioModule} from '@angular/material/radio';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { HttpClientModule } from '@angular/common/http';
import {MatTabsModule} from '@angular/material/tabs';
import {MatBadgeModule} from '@angular/material/badge';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import {MatChipsModule} from '@angular/material/chips';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { CardComponent } from './components/card/card.component';
import { InputComponent } from './components/input/input.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchComponent } from './components/search/search.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { FindvenuepageComponent } from './components/findvenuepage/findvenuepage.component';
import { VenuedetailspageComponent } from './components/venuedetailspage/venuedetailspage.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FoodcardsComponent } from './components/foodcards/foodcards.component';
import { AdmimportalpageComponent } from './components/admimportalpage/admimportalpage.component';
import { FindvenuepagetwoComponent } from './components/findvenuepagetwo/findvenuepagetwo.component';
import { PlannerpageComponent } from './components/plannerpage/plannerpage.component';
import { PlannercardComponent } from './components/plannercard/plannercard.component';
import { TestComponentComponent } from './components/test-component/test-component.component';
import { FeaturesComponent } from './components/features/features.component';
import { FindvenuepageInformationComponent } from './components/findvenuepage-information/findvenuepage-information.component';
import { FindvenuepageHotelsComponent } from './components/findvenuepage-hotels/findvenuepage-hotels.component';
import { FindvenuepageCinemaComponent } from './components/findvenuepage-cinema/findvenuepage-cinema.component';
import { FindvenuepageThingstodoComponent } from './components/findvenuepage-thingstodo/findvenuepage-thingstodo.component';
import { FindvenuepageRetailComponent } from './components/findvenuepage-retail/findvenuepage-retail.component';
import { FindvenuepageHealthComponent } from './components/findvenuepage-health/findvenuepage-health.component';
import { FindvenuepageExhibitionsComponent } from './components/findvenuepage-exhibitions/findvenuepage-exhibitions.component';
import { VenueDetailsDbComponent } from './components/venue-details-db/venue-details-db.component';
import { VenueDetailsCotswoldwildlifeComponent } from './components/venue-details-cotswoldwildlife/venue-details-cotswoldwildlife.component';
import { VenueDetailsTheoldprisonComponent } from './components/venue-details-theoldprison/venue-details-theoldprison.component';
import { VenueDetailsDistillaryComponent } from './components/venue-details-distillary/venue-details-distillary.component';
import { VenueDetailsJacksComponent } from './components/venue-details-jacks/venue-details-jacks.component';
import { VenueDetailsGatewayComponent } from './components/venue-details-gateway/venue-details-gateway.component';
import { VenueDetailsSallyComponent } from './components/venue-details-sally/venue-details-sally.component';
import { VenueDetailsPrioryComponent } from './components/venue-details-priory/venue-details-priory.component';
import { VenueDetailsSomewhereComponent } from './components/venue-details-somewhere/venue-details-somewhere.component';
import { VenueDetailsLowermillComponent } from './components/venue-details-lowermill/venue-details-lowermill.component';
import { VenueDetailsCotswoldwayComponent } from './components/venue-details-cotswoldway/venue-details-cotswoldway.component';
import { VenueDetailsSteamrailwayComponent } from './components/venue-details-steamrailway/venue-details-steamrailway.component';
import { VenueDetailsCathedralComponent } from './components/venue-details-cathedral/venue-details-cathedral.component';
import { VenueDetailsCoriniumMuseumComponent } from './components/venue-details-corinium-museum/venue-details-corinium-museum.component';
import { VenueDetailsBirdlandComponent } from './components/venue-details-birdland/venue-details-birdland.component';
import { VenueDetailsWestonbirtArboretumComponent } from './components/venue-details-westonbirt-arboretum/venue-details-westonbirt-arboretum.component';
import { VenueDetailsStowVisitorComponent } from './components/venue-details-stow-visitor/venue-details-stow-visitor.component';
import { VenueDetailsBroadwayTouristCentreComponent } from './components/venue-details-broadway-tourist-centre/venue-details-broadway-tourist-centre.component';
import { VenueDetailsGloucesterTouristCentreComponent } from './components/venue-details-gloucester-tourist-centre/venue-details-gloucester-tourist-centre.component';
import { VenueDetailsTewkesburyHeritageComponent } from './components/venue-details-tewkesbury-heritage/venue-details-tewkesbury-heritage.component';
import { VenueDetailsCotswoldCanalsTrustComponent } from './components/venue-details-cotswold-canals-trust/venue-details-cotswold-canals-trust.component';
import { VenueDetailsCoriniumHotelComponent } from './components/venue-details-corinium-hotel/venue-details-corinium-hotel.component';
import { VenueDetailsCotswoldHareComponent } from './components/venue-details-cotswold-hare/venue-details-cotswold-hare.component';
import { VenueDetailsIvyHouseComponent } from './components/venue-details-ivy-house/venue-details-ivy-house.component';
import { VenueDetailsStrattonHouseHotelComponent } from './components/venue-details-stratton-house-hotel/venue-details-stratton-house-hotel.component';
import { VenueDetailsCineworldCheltenhamComponent } from './components/venue-details-cineworld-cheltenham/venue-details-cineworld-cheltenham.component';
import { VenueDetailsCheltenhamMusicFestivalComponent } from './components/venue-details-cheltenham-music-festival/venue-details-cheltenham-music-festival.component';
import { VenueDetailsCotswoldOutdoorComponent } from './components/venue-details-cotswold-outdoor/venue-details-cotswold-outdoor.component';


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
    SearchComponent,
    CategoriesComponent,
    FindvenuepageComponent,
    VenuedetailspageComponent,
    FoodcardsComponent,
    AdmimportalpageComponent,
    FindvenuepagetwoComponent,
    PlannerpageComponent,
    PlannercardComponent,
    TestComponentComponent,
    FeaturesComponent,
    FindvenuepageInformationComponent,
    FindvenuepageHotelsComponent,
    FindvenuepageCinemaComponent,
    FindvenuepageThingstodoComponent,
    FindvenuepageRetailComponent,
    FindvenuepageHealthComponent,
    FindvenuepageExhibitionsComponent,
    VenueDetailsDbComponent,
    VenueDetailsCotswoldwildlifeComponent,
    VenueDetailsTheoldprisonComponent,
    VenueDetailsDistillaryComponent,
    VenueDetailsJacksComponent,
    VenueDetailsGatewayComponent,
    VenueDetailsSallyComponent,
    VenueDetailsPrioryComponent,
    VenueDetailsSomewhereComponent,
    VenueDetailsLowermillComponent,
    VenueDetailsCotswoldwayComponent,
    VenueDetailsSteamrailwayComponent,
    VenueDetailsCathedralComponent,
    VenueDetailsCoriniumMuseumComponent,
    VenueDetailsBirdlandComponent,
    VenueDetailsWestonbirtArboretumComponent,
    VenueDetailsStowVisitorComponent,
    VenueDetailsBroadwayTouristCentreComponent,
    VenueDetailsGloucesterTouristCentreComponent,
    VenueDetailsTewkesburyHeritageComponent,
    VenueDetailsCotswoldCanalsTrustComponent,
    VenueDetailsCoriniumHotelComponent,
    VenueDetailsCotswoldHareComponent,
    VenueDetailsIvyHouseComponent,
    VenueDetailsStrattonHouseHotelComponent,
    VenueDetailsCineworldCheltenhamComponent,
    VenueDetailsCheltenhamMusicFestivalComponent,
    VenueDetailsCotswoldOutdoorComponent,
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
    MatBadgeModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatMenuModule,
    MatTableModule,
    MatChipsModule,
    MatDialogModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule],
  providers: [
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }