import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueDetailsCotswoldwildlifeComponent } from './venue-details-cotswoldwildlife.component';

describe('VenueDetailsCotswoldwildlifeComponent', () => {
  let component: VenueDetailsCotswoldwildlifeComponent;
  let fixture: ComponentFixture<VenueDetailsCotswoldwildlifeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenueDetailsCotswoldwildlifeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VenueDetailsCotswoldwildlifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
