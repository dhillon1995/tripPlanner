import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueDetailsStrattonHouseHotelComponent } from './venue-details-stratton-house-hotel.component';

describe('VenueDetailsStrattonHouseHotelComponent', () => {
  let component: VenueDetailsStrattonHouseHotelComponent;
  let fixture: ComponentFixture<VenueDetailsStrattonHouseHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenueDetailsStrattonHouseHotelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VenueDetailsStrattonHouseHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
