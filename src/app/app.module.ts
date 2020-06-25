import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ArticlesComponent } from './pages/categories/articles/articles.component';
import { TagsComponent } from './pages/categories/tags/tags.component';
import { DestinationsComponent } from './pages/categories/destinations/destinations.component';
import { CountriesComponent } from './pages/categories/countries/countries.component';

import { CountryComponent } from './pages/singles/country/country.component';
import { ArticleComponent } from './pages/singles/article/article.component';
import { PodcastComponent } from './pages/singles/podcast/podcast.component';
import { UploadComponent } from './pages/upload/upload.component';
import { PhotoreportagesComponent } from './pages/categories/photoreportages/photoreportages.component';
import { FooterMiniatureComponent } from './shared/footer/footer-miniature/footer-miniature.component';
import { ArticlesListItemComponent } from './shared/content-blocks/articles-list-item/articles-list-item.component';
import { ArticlesListMiniItemComponent } from './shared/content-blocks/articles-list-mini-item/articles-list-mini-item.component';
import { FeaturedArticleComponent } from './shared/content-blocks/featured-article/featured-article.component';
import { VideosAndPodcastsComponent } from './shared/content-blocks/videos-and-podcasts/videos-and-podcasts.component';
import { MagazineSubscriptionComponent } from './shared/content-blocks/magazine-subscription/magazine-subscription.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArticlesComponent,
    TagsComponent,
    DestinationsComponent,
    CountriesComponent,
    CountryComponent,
    ArticleComponent,
    PodcastComponent,
    UploadComponent,
    PhotoreportagesComponent,
    FooterMiniatureComponent,
    ArticlesListItemComponent,
    ArticlesListMiniItemComponent,
    FeaturedArticleComponent,
    VideosAndPodcastsComponent,
    MagazineSubscriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
