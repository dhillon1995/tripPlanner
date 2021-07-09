import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueDetailsTewkesburyHeritageComponent } from './venue-details-tewkesbury-heritage.component';

describe('VenueDetailsTewkesburyHeritageComponent', () => {
  let component: VenueDetailsTewkesburyHeritageComponent;
  let fixture: ComponentFixture<VenueDetailsTewkesburyHeritageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenueDetailsTewkesburyHeritageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VenueDetailsTewkesburyHeritageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
