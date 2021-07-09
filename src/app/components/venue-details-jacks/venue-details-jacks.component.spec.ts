import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueDetailsJacksComponent } from './venue-details-jacks.component';

describe('VenueDetailsJacksComponent', () => {
  let component: VenueDetailsJacksComponent;
  let fixture: ComponentFixture<VenueDetailsJacksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenueDetailsJacksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VenueDetailsJacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
