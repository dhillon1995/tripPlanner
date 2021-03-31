import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { VenueComponent } from './components/venue/venue.component';
import { FindvenuepageComponent } from './components/findvenuepage/findvenuepage.component';

const appRoutes: Routes = [
    { path: 'home', component: HomepageComponent },
    { path: 'venue', component: FindvenuepageComponent }
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
