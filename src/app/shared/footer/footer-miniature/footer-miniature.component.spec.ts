import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterMiniatureComponent } from './footer-miniature.component';

describe('FooterMiniatureComponent', () => {
  let component: FooterMiniatureComponent;
  let fixture: ComponentFixture<FooterMiniatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterMiniatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterMiniatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
