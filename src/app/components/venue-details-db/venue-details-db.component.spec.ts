import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueDetailsDbComponent } from './venue-details-db.component';

describe('VenueDetailsDbComponent', () => {
  let component: VenueDetailsDbComponent;
  let fixture: ComponentFixture<VenueDetailsDbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenueDetailsDbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VenueDetailsDbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
