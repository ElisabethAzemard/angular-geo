import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoreportagesComponent } from './photoreportages.component';

describe('PhotoreportagesComponent', () => {
  let component: PhotoreportagesComponent;
  let fixture: ComponentFixture<PhotoreportagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoreportagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoreportagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
