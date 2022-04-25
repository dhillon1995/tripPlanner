import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalVenueSearchComponent } from './portal-venue-search.component';

describe('PortalVenueSearchComponent', () => {
  let component: PortalVenueSearchComponent;
  let fixture: ComponentFixture<PortalVenueSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortalVenueSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalVenueSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
