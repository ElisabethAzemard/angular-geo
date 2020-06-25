import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';

import { ArticlesComponent } from './pages/categories/articles/articles.component';
import { TagsComponent } from './pages/categories/tags/tags.component';
import { CountriesComponent } from './pages/categories/countries/countries.component';
import { DestinationsComponent } from './pages/categories/destinations/destinations.component';

import { CountryComponent } from './pages/singles/country/country.component';
import { ArticleComponent } from './pages/singles/article/article.component';
import { PodcastComponent } from './pages/singles/podcast/podcast.component';
import { PhotoreportagesComponent } from './pages/categories/photoreportages/photoreportages.component';
import { UploadComponent } from './pages/upload/upload.component';

import { NavbarComponent } from './shared/header/navbar/navbar.component';


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'articles', component: ArticlesComponent },
    { path: 'tags', component: TagsComponent },
    { path: 'destinations', component: DestinationsComponent },
    { path: 'countries', component: CountriesComponent },
    { path: 'countries/france', component: CountryComponent },
    { path: 'articles/article-name', component: ArticleComponent },
    { path: 'articles/another-article-name', component: ArticleComponent },
    { path: 'podcasts/podcast-name', component: PodcastComponent },
    { path: 'photoreportages/photo-reportage-name', component: PhotoreportagesComponent },
    { path: 'upload', component: UploadComponent },
    { path: 'menu', component: NavbarComponent },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
