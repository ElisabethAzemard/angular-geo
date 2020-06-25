import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesListMiniItemComponent } from './articles-list-mini-item.component';

describe('ArticlesListMiniItemComponent', () => {
  let component: ArticlesListMiniItemComponent;
  let fixture: ComponentFixture<ArticlesListMiniItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlesListMiniItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesListMiniItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
