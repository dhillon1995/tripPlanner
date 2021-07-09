import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueDetailsCheltenhamMusicFestivalComponent } from './venue-details-cheltenham-music-festival.component';

describe('VenueDetailsCheltenhamMusicFestivalComponent', () => {
  let component: VenueDetailsCheltenhamMusicFestivalComponent;
  let fixture: ComponentFixture<VenueDetailsCheltenhamMusicFestivalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenueDetailsCheltenhamMusicFestivalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VenueDetailsCheltenhamMusicFestivalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
