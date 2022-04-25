import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalLocalSearchComponent } from './portal-local-search.component';

describe('PortalLocalSearchComponent', () => {
  let component: PortalLocalSearchComponent;
  let fixture: ComponentFixture<PortalLocalSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortalLocalSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalLocalSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
