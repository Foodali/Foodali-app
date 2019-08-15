import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefinfoPage } from './chefinfo.page';

describe('ChefinfoPage', () => {
  let component: ChefinfoPage;
  let fixture: ComponentFixture<ChefinfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChefinfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefinfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
