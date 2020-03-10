import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoCanPage } from './who-can.page';

describe('WhoCanPage', () => {
  let component: WhoCanPage;
  let fixture: ComponentFixture<WhoCanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhoCanPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhoCanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
