import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-videos-and-podcasts',
  templateUrl: './videos-and-podcasts.component.html',
  styleUrls: ['./videos-and-podcasts.component.scss']
})
export class VideosAndPodcastsComponent implements OnInit {

  @Input() image: string = "./assets/featured-article.png";
  @Input() logo: string = "./assets/logo-wireframe.png";
  @Input() category: string = "Vidéos et Podcasts";
  @Input() title: string = "Les plus belles villes du monde";
  @Input() description: string = "Notre planète regorge de merveilles. Voici une petite sélection des villes, hors de France, qui nous ont tapé dans l'oeil.";
  @Input() link1Title: string = "Voir les vidéos";
  @Input() link2Title: string = "Écouter les podcasts";

  constructor() { }

  ngOnInit() {
  }

}
