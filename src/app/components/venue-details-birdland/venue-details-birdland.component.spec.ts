import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueDetailsBirdlandComponent } from './venue-details-birdland.component';

describe('VenueDetailsBirdlandComponent', () => {
  let component: VenueDetailsBirdlandComponent;
  let fixture: ComponentFixture<VenueDetailsBirdlandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenueDetailsBirdlandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VenueDetailsBirdlandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
