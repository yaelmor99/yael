import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C8Component } from './c8.component';

describe('C8Component', () => {
  let component: C8Component;
  let fixture: ComponentFixture<C8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
