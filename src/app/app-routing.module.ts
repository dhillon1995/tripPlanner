import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { FindvenuepageComponent } from './components/findvenuepage/findvenuepage.component';
import { VenuedetailspageComponent } from './components/venuedetailspage/venuedetailspage.component';
import { AdmimportalpageComponent } from './components/admimportalpage/admimportalpage.component';
import { FindvenuepagetwoComponent } from './components/findvenuepagetwo/findvenuepagetwo.component';
import { PlannerpageComponent } from './components/plannerpage/plannerpage.component';

const appRoutes: Routes = [
    { path: 'home', component: HomepageComponent },
    { path: 'venue', component: FindvenuepageComponent },
    { path: 'venuepage', component: VenuedetailspageComponent },
    { path: 'adminPortal', component: AdmimportalpageComponent },
    { path: 'category', component: FindvenuepagetwoComponent },
    { path: 'planner', component: PlannerpageComponent },
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
