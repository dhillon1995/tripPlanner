import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueDetailsPrioryComponent } from './venue-details-priory.component';

describe('VenueDetailsPrioryComponent', () => {
  let component: VenueDetailsPrioryComponent;
  let fixture: ComponentFixture<VenueDetailsPrioryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenueDetailsPrioryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VenueDetailsPrioryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
