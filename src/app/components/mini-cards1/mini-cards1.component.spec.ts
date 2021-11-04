import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniCards1Component } from './mini-cards1.component';

describe('MiniCards1Component', () => {
  let component: MiniCards1Component;
  let fixture: ComponentFixture<MiniCards1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniCards1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniCards1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
