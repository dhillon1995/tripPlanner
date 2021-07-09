import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindvenuepageExhibitionsComponent } from './findvenuepage-exhibitions.component';

describe('FindvenuepageExhibitionsComponent', () => {
  let component: FindvenuepageExhibitionsComponent;
  let fixture: ComponentFixture<FindvenuepageExhibitionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindvenuepageExhibitionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindvenuepageExhibitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
