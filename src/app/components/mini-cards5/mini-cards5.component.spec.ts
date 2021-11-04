import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniCards5Component } from './mini-cards5.component';

describe('MiniCards5Component', () => {
  let component: MiniCards5Component;
  let fixture: ComponentFixture<MiniCards5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniCards5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniCards5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
