import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  @Input() title: string = "Voyage";
  @Input() subcategories = [
    {
      name: 'Geo +',
      image: './assets/icons/geoplus.svg'
    },
    {
      name: 'Tourisme',
      image: './assets/icons/tourisme.svg'
    },
    {
      name: 'Vacances',
      image: './assets/icons/vacances.svg'
    },
    {
      name: 'Géopolitique',
      image: './assets/icons/geopolitique.svg'
    },
    {
      name: 'Les incontournables',
      image: './assets/icons/incontournable.svg'
    },
    {
      name: 'Vidéos de voyage',
      image: './assets/icons/videos.svg'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
