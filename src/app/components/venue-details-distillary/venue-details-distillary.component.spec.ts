import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueDetailsDistillaryComponent } from './venue-details-distillary.component';

describe('VenueDetailsDistillaryComponent', () => {
  let component: VenueDetailsDistillaryComponent;
  let fixture: ComponentFixture<VenueDetailsDistillaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenueDetailsDistillaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VenueDetailsDistillaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
