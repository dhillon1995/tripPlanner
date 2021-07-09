import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueDetailsSteamrailwayComponent } from './venue-details-steamrailway.component';

describe('VenueDetailsSteamrailwayComponent', () => {
  let component: VenueDetailsSteamrailwayComponent;
  let fixture: ComponentFixture<VenueDetailsSteamrailwayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenueDetailsSteamrailwayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VenueDetailsSteamrailwayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
