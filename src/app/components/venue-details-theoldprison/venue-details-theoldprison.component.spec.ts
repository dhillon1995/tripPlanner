import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueDetailsTheoldprisonComponent } from './venue-details-theoldprison.component';

describe('VenueDetailsTheoldprisonComponent', () => {
  let component: VenueDetailsTheoldprisonComponent;
  let fixture: ComponentFixture<VenueDetailsTheoldprisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenueDetailsTheoldprisonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VenueDetailsTheoldprisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
