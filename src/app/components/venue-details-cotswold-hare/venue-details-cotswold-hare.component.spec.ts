import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueDetailsCotswoldHareComponent } from './venue-details-cotswold-hare.component';

describe('VenueDetailsCotswoldHareComponent', () => {
  let component: VenueDetailsCotswoldHareComponent;
  let fixture: ComponentFixture<VenueDetailsCotswoldHareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenueDetailsCotswoldHareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VenueDetailsCotswoldHareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
