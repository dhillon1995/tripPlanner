import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenuedetailspageComponent } from './venuedetailspage.component';

describe('VenuedetailspageComponent', () => {
  let component: VenuedetailspageComponent;
  let fixture: ComponentFixture<VenuedetailspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenuedetailspageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VenuedetailspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
