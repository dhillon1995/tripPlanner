import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueDetailsLowermillComponent } from './venue-details-lowermill.component';

describe('VenueDetailsLowermillComponent', () => {
  let component: VenueDetailsLowermillComponent;
  let fixture: ComponentFixture<VenueDetailsLowermillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenueDetailsLowermillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VenueDetailsLowermillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
