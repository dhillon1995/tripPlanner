import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueDetailsBroadwayTouristCentreComponent } from './venue-details-broadway-tourist-centre.component';

describe('VenueDetailsBroadwayTouristCentreComponent', () => {
  let component: VenueDetailsBroadwayTouristCentreComponent;
  let fixture: ComponentFixture<VenueDetailsBroadwayTouristCentreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenueDetailsBroadwayTouristCentreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VenueDetailsBroadwayTouristCentreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
