import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueDetailsCathedralComponent } from './venue-details-cathedral.component';

describe('VenueDetailsCathedralComponent', () => {
  let component: VenueDetailsCathedralComponent;
  let fixture: ComponentFixture<VenueDetailsCathedralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenueDetailsCathedralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VenueDetailsCathedralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
