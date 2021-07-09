import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueDetailsGloucesterTouristCentreComponent } from './venue-details-gloucester-tourist-centre.component';

describe('VenueDetailsGloucesterTouristCentreComponent', () => {
  let component: VenueDetailsGloucesterTouristCentreComponent;
  let fixture: ComponentFixture<VenueDetailsGloucesterTouristCentreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenueDetailsGloucesterTouristCentreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VenueDetailsGloucesterTouristCentreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
