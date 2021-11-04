import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniCards3Component } from './mini-cards3.component';

describe('MiniCards3Component', () => {
  let component: MiniCards3Component;
  let fixture: ComponentFixture<MiniCards3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniCards3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniCards3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
