import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueDetailsSallyComponent } from './venue-details-sally.component';

describe('VenueDetailsSallyComponent', () => {
  let component: VenueDetailsSallyComponent;
  let fixture: ComponentFixture<VenueDetailsSallyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenueDetailsSallyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VenueDetailsSallyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
