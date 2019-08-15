import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostmyfoodPage } from './postmyfood.page';

describe('PostmyfoodPage', () => {
  let component: PostmyfoodPage;
  let fixture: ComponentFixture<PostmyfoodPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostmyfoodPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostmyfoodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
