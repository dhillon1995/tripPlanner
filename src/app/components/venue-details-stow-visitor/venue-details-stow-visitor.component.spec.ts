import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueDetailsStowVisitorComponent } from './venue-details-stow-visitor.component';

describe('VenueDetailsStowVisitorComponent', () => {
  let component: VenueDetailsStowVisitorComponent;
  let fixture: ComponentFixture<VenueDetailsStowVisitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenueDetailsStowVisitorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VenueDetailsStowVisitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
