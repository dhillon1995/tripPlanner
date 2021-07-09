import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindvenuepageHotelsComponent } from './findvenuepage-hotels.component';

describe('FindvenuepageHotelsComponent', () => {
  let component: FindvenuepageHotelsComponent;
  let fixture: ComponentFixture<FindvenuepageHotelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindvenuepageHotelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindvenuepageHotelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
