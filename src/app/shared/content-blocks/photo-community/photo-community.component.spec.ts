import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoCommunityComponent } from './photo-community.component';

describe('PhotoCommunityComponent', () => {
  let component: PhotoCommunityComponent;
  let fixture: ComponentFixture<PhotoCommunityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoCommunityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoCommunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
