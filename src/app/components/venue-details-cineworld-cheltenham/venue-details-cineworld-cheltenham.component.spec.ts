import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueDetailsCineworldCheltenhamComponent } from './venue-details-cineworld-cheltenham.component';

describe('VenueDetailsCineworldCheltenhamComponent', () => {
  let component: VenueDetailsCineworldCheltenhamComponent;
  let fixture: ComponentFixture<VenueDetailsCineworldCheltenhamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenueDetailsCineworldCheltenhamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VenueDetailsCineworldCheltenhamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
