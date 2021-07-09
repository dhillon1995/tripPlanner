import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueDetailsWestonbirtArboretumComponent } from './venue-details-westonbirt-arboretum.component';

describe('VenueDetailsWestonbirtArboretumComponent', () => {
  let component: VenueDetailsWestonbirtArboretumComponent;
  let fixture: ComponentFixture<VenueDetailsWestonbirtArboretumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenueDetailsWestonbirtArboretumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VenueDetailsWestonbirtArboretumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
