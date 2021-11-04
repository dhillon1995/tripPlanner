import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityfilterTabsComponent } from './activityfilter-tabs.component';

describe('ActivityfilterTabsComponent', () => {
  let component: ActivityfilterTabsComponent;
  let fixture: ComponentFixture<ActivityfilterTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityfilterTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityfilterTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
