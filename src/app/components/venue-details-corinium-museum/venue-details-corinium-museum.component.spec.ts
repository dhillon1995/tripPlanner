import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueDetailsCoriniumMuseumComponent } from './venue-details-corinium-museum.component';

describe('VenueDetailsCoriniumMuseumComponent', () => {
  let component: VenueDetailsCoriniumMuseumComponent;
  let fixture: ComponentFixture<VenueDetailsCoriniumMuseumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenueDetailsCoriniumMuseumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VenueDetailsCoriniumMuseumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
