import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenuesummarycardComponent } from './venuesummarycard.component';

describe('VenuesummarycardComponent', () => {
  let component: VenuesummarycardComponent;
  let fixture: ComponentFixture<VenuesummarycardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenuesummarycardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VenuesummarycardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
