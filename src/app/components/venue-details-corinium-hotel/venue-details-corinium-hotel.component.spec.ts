import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueDetailsCoriniumHotelComponent } from './venue-details-corinium-hotel.component';

describe('VenueDetailsCoriniumHotelComponent', () => {
  let component: VenueDetailsCoriniumHotelComponent;
  let fixture: ComponentFixture<VenueDetailsCoriniumHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenueDetailsCoriniumHotelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VenueDetailsCoriniumHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
