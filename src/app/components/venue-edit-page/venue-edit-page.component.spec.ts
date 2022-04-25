import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueEditPageComponent } from './venue-edit-page.component';

describe('VenueEditPageComponent', () => {
  let component: VenueEditPageComponent;
  let fixture: ComponentFixture<VenueEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenueEditPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VenueEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
