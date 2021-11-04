import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniCards2Component } from './mini-cards2.component';

describe('MiniCards2Component', () => {
  let component: MiniCards2Component;
  let fixture: ComponentFixture<MiniCards2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniCards2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniCards2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
