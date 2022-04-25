import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { FindvenuepageComponent } from './components/findvenuepage/findvenuepage.component';
import { VenuedetailspageComponent } from './components/venuedetailspage/venuedetailspage.component';
import { AdmimportalpageComponent } from './components/admimportalpage/admimportalpage.component';
import { FindvenuepagetwoComponent } from './components/findvenuepagetwo/findvenuepagetwo.component';
import { PlannerpageComponent } from './components/plannerpage/plannerpage.component';
import { FindvenuepageInformationComponent } from './components/findvenuepage-information/findvenuepage-information.component';
import { FindvenuepageHotelsComponent } from './components/findvenuepage-hotels/findvenuepage-hotels.component';
import { FindvenuepageThingstodoComponent } from './components/findvenuepage-thingstodo/findvenuepage-thingstodo.component';
import { FindvenuepageHealthComponent } from './components/findvenuepage-health/findvenuepage-health.component';
import { FindvenuepageCinemaComponent } from './components/findvenuepage-cinema/findvenuepage-cinema.component';
import { FindvenuepageExhibitionsComponent } from './components/findvenuepage-exhibitions/findvenuepage-exhibitions.component';
import { FindvenuepageRetailComponent } from './components/findvenuepage-retail/findvenuepage-retail.component';
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
import { ActivityplannerComponent } from './components/activityplanner/activityplanner.component';
import { ActivityResultsComponent } from './components/activity-results/activity-results.component';
import { SearchComponent } from './components/search/search.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { AdminLandingPageComponent } from './components/admin-landing-page/admin-landing-page.component';
import { VenueEditPageComponent } from './components/venue-edit-page/venue-edit-page.component';
import { TimelineTestComponent } from './components/timeline-test/timeline-test.component';

const appRoutes: Routes = [
    //{ path: '', component: HomepageComponent, pathMatch: 'full'},
    //{ path: 'home', component: HomepageComponent },
    { path: 'home', redirectTo: '' },
    { path: 'venue', component: FindvenuepageComponent },
    { path: 'venuepage', component: VenuedetailspageComponent },
    { path: 'adminPortal', component: AdmimportalpageComponent },
    { path: 'category', component: FindvenuepagetwoComponent },
    { path: 'information', component: FindvenuepageInformationComponent },
    { path: 'hotels', component: FindvenuepageHotelsComponent },
    { path: 'things', component: FindvenuepageThingstodoComponent },
    { path: 'health', component: FindvenuepageHealthComponent },
    { path: 'cinema', component: FindvenuepageCinemaComponent },
    { path: 'retail', component: FindvenuepageRetailComponent },
    { path: 'exhibitions', component: FindvenuepageExhibitionsComponent },
    { path: 'planner', component: PlannerpageComponent },
    { path: 'venuepagedb', component: VenueDetailsDbComponent },
    { path: 'park', component: VenueDetailsCotswoldwildlifeComponent },
    { path: 'prison', component: VenueDetailsTheoldprisonComponent },
    { path: 'distillary', component: VenueDetailsDistillaryComponent },
    { path: 'gateway', component: VenueDetailsGatewayComponent },
    { path: 'jacks', component: VenueDetailsJacksComponent },
    { path: 'sally', component: VenueDetailsSallyComponent },
    { path: 'priory', component: VenueDetailsPrioryComponent },
    { path: 'somewhere', component: VenueDetailsSomewhereComponent },
    { path: 'lowerMill', component: VenueDetailsLowermillComponent },
    { path: 'cotsway', component: VenueDetailsCotswoldwayComponent },
    { path: 'railway', component: VenueDetailsSteamrailwayComponent },
    { path: 'cathedral', component: VenueDetailsCathedralComponent },
    { path: 'coroniumMuseum', component: VenueDetailsCoriniumMuseumComponent },
    { path: 'birdland', component: VenueDetailsBirdlandComponent },
    { path: 'arboretum', component: VenueDetailsWestonbirtArboretumComponent },
    { path: 'stowVisitor', component: VenueDetailsStowVisitorComponent },
    { path: 'broadway', component: VenueDetailsBroadwayTouristCentreComponent },
    { path: 'gloucesterTourist', component: VenueDetailsGloucesterTouristCentreComponent },
    { path: 'tewkesburyHeritage', component: VenueDetailsTewkesburyHeritageComponent },
    { path: 'canalsTrust', component: VenueDetailsCotswoldCanalsTrustComponent },
    { path: 'coroniumHotel', component: VenueDetailsCoriniumHotelComponent },
    { path: 'cotswoldHare', component: VenueDetailsCotswoldHareComponent },
    { path: 'ivyHouse', component: VenueDetailsIvyHouseComponent },
    { path: 'strattonHouse', component: VenueDetailsStrattonHouseHotelComponent },
    { path: 'cineworld', component: VenueDetailsCineworldCheltenhamComponent },
    { path: 'musicFestival', component: VenueDetailsCheltenhamMusicFestivalComponent },
    { path: 'cotswoldOutdoor', component: VenueDetailsCotswoldOutdoorComponent },
    { path: 'activityResults', component: ActivityResultsComponent },
    { path: 'activityResults2', component: TimelineTestComponent },
    { path: 'activity', component: ActivityplannerComponent },
    { path: 'activity', redirectTo: '' },
    { path: 'searchpage', component: SearchPageComponent},
    { path: 'adminLandingPage', component: AdminLandingPageComponent},
    { path: 'venueEditpage', component: VenueEditPageComponent},

    { path: '**', component: HomepageComponent }
    
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
