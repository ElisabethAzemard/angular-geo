import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosAndPodcastsComponent } from './videos-and-podcasts.component';

describe('VideosAndPodcastsComponent', () => {
  let component: VideosAndPodcastsComponent;
  let fixture: ComponentFixture<VideosAndPodcastsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideosAndPodcastsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideosAndPodcastsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
