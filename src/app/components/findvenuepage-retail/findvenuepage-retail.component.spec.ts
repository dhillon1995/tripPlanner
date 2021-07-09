import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindvenuepageRetailComponent } from './findvenuepage-retail.component';

describe('FindvenuepageRetailComponent', () => {
  let component: FindvenuepageRetailComponent;
  let fixture: ComponentFixture<FindvenuepageRetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindvenuepageRetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindvenuepageRetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
