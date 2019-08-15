import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefPage } from './chef.page';

describe('ChefPage', () => {
  let component: ChefPage;
  let fixture: ComponentFixture<ChefPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChefPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
