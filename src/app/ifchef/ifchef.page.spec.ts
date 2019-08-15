import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IfchefPage } from './ifchef.page';

describe('IfchefPage', () => {
  let component: IfchefPage;
  let fixture: ComponentFixture<IfchefPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IfchefPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IfchefPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
