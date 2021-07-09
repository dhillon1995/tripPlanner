import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueDetailsSomewhereComponent } from './venue-details-somewhere.component';

describe('VenueDetailsSomewhereComponent', () => {
  let component: VenueDetailsSomewhereComponent;
  let fixture: ComponentFixture<VenueDetailsSomewhereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenueDetailsSomewhereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VenueDetailsSomewhereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
