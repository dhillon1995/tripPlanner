import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueDetailsGatewayComponent } from './venue-details-gateway.component';

describe('VenueDetailsGatewayComponent', () => {
  let component: VenueDetailsGatewayComponent;
  let fixture: ComponentFixture<VenueDetailsGatewayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenueDetailsGatewayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VenueDetailsGatewayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
