import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueDetailsIvyHouseComponent } from './venue-details-ivy-house.component';

describe('VenueDetailsIvyHouseComponent', () => {
  let component: VenueDetailsIvyHouseComponent;
  let fixture: ComponentFixture<VenueDetailsIvyHouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenueDetailsIvyHouseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VenueDetailsIvyHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
