import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueDetailsCotswoldOutdoorComponent } from './venue-details-cotswold-outdoor.component';

describe('VenueDetailsCotswoldOutdoorComponent', () => {
  let component: VenueDetailsCotswoldOutdoorComponent;
  let fixture: ComponentFixture<VenueDetailsCotswoldOutdoorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenueDetailsCotswoldOutdoorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VenueDetailsCotswoldOutdoorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
