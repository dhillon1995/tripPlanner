import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueDetailsCotswoldwayComponent } from './venue-details-cotswoldway.component';

describe('VenueDetailsCotswoldwayComponent', () => {
  let component: VenueDetailsCotswoldwayComponent;
  let fixture: ComponentFixture<VenueDetailsCotswoldwayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenueDetailsCotswoldwayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VenueDetailsCotswoldwayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
