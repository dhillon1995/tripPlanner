import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueDetailsCotswoldCanalsTrustComponent } from './venue-details-cotswold-canals-trust.component';

describe('VenueDetailsCotswoldCanalsTrustComponent', () => {
  let component: VenueDetailsCotswoldCanalsTrustComponent;
  let fixture: ComponentFixture<VenueDetailsCotswoldCanalsTrustComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenueDetailsCotswoldCanalsTrustComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VenueDetailsCotswoldCanalsTrustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
